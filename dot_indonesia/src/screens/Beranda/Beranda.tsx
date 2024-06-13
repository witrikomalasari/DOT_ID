import {Spacer} from '@components/Atom';
import {HeaderSearch} from '@components/Molecules';
import CardMovie from '@components/Molecules/CardMovie';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {Movie} from '@models/movieInterface';
import {getMovieDataAsync} from '@redux/actions/movieAsynchron';
import {DOTColors} from '@theme/DotColors';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const Beranda = () => {
  const dispatch = useAppDispatch();
  const navigation = useBaseNavigation();

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [allMovies, setAllMovies] = useState<Movie[]>([]); // Cumulative movie list

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const newMovies = await dispatch(getMovieDataAsync({page})).unwrap();
      setAllMovies(prevMovies => [...prevMovies, ...newMovies]); // Append new movies
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch, page]);

  // console.log('popp', JSON.stringify(movies, null, 2));

  const LoadMoreNext = async () => {
    setIsFetchingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    const newMovies = await dispatch(
      getMovieDataAsync({page: nextPage}),
    ).unwrap();
    setAllMovies(prevMovies => [...prevMovies, ...newMovies]); // Append new movies
    setIsFetchingMore(false);
  };

  const LoadMorePrevious = useCallback(async () => {
    if (page > 1) {
      setIsFetchingMore(true);
      const prevPage = page - 1;
      setPage(prevPage);
      const newMovies = await dispatch(
        getMovieDataAsync({page: prevPage}),
      ).unwrap();
      setAllMovies(prevMovies => [...newMovies, ...prevMovies]); // Prepend new movies
      setIsFetchingMore(false);
    }
  }, [page, dispatch]);

  // ============== flatlist =======================
  const windowSize =
    allMovies.length > 50 ? Math.floor(allMovies.length / 3) : 21;
  const initialLoadNumber = 10; // This is the number which defines how many data will be loaded for every 'onReachEnd'
  const numToRenderPerBatch = 8; // This is the number which defines how many data will be loaded on first open

  const renderFooter = useCallback((): ReactNode => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={DOTColors.secondary} />
        <Spacer height={20} />
        <Text style={{color: 'black'}}>Sedang memuat...</Text>
        <Spacer height={20} />
      </View>
    );
  }, []);

  const renderEmptyComponent = (): ReactNode => {
    return (
      <View
        style={{
          borderColor: DOTColors.border.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>No Data</Text>
      </View>
    );
  };

  const handleEndReached = () => {
    if (!isFetchingMore) {
      LoadMoreNext();
    }
  };

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {contentOffset} = event.nativeEvent;
      if (contentOffset.y < -50 && !isFetchingMore) {
        LoadMorePrevious();
      }
    },
    [LoadMorePrevious, isFetchingMore],
  );

  return (
    <SafeAreaView>
      <HeaderSearch />
      <Spacer height={10} />
      <View style={styles.listContainer}>
        <CardMovie
          keyExtractor={(item: Movie): string => item.id.toString()} // Unique key
          data={allMovies}
          horizontal={false}
          numColumns={3}
          navigation={navigation}
          bounces={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          onScroll={handleScroll}
          windowSize={windowSize}
          initialNumToRender={initialLoadNumber}
          maxToRenderPerBatch={numToRenderPerBatch}
          // updateCellsBatchingPeriod={1000}
          ListFooterComponent={isFetchingMore ? renderFooter : undefined}
          ListEmptyComponent={renderEmptyComponent}
          showsVerticalScrollIndicator={false}
          styleContent={{
            width: (width - 40) / 3 - 10, // Adjust width for three columns
            height: 230, //hp(230),
          }}
          styleImages={{
            width: (width - 40) / 3 - 10,
            height: 140, //hp(140)
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  listContainer: {paddingHorizontal: 16},
  loadingContainer: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'black',
  },
});
