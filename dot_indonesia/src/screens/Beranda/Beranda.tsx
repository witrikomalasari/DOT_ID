import {Spacer} from '@components/Atom';
import {HeaderSearch} from '@components/Molecules';
import CardMovie from '@components/Molecules/CardMovie';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {Movie} from '@models/movieInterface';
import {getMovieDataAsync} from '@redux/actions/movieAsynchron';
import {DOTColors} from '@theme/DotColors';
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

interface IBeranda {}

const Beranda: FC<IBeranda> = () => {
  const dispatch = useAppDispatch();
  const navigation = useBaseNavigation();

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [listFilterSearch, setListFilterSearch] = useState<Movie[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [allMovies, setAllMovies] = useState<Movie[]>([]); // Cumulative movie list
  const [fetchedMovieIds] = useState<Set<number>>(new Set());

  const fetchMovies = useCallback(
    async (pageNum: number) => {
      setIsLoading(true);
      try {
        const newMovies = await dispatch(
          getMovieDataAsync({page: pageNum}),
        ).unwrap();
        const uniqueNewMovies = newMovies.filter(
          movie => !fetchedMovieIds.has(movie.id),
        );
        setAllMovies(prevMovies => [...prevMovies, ...uniqueNewMovies]);
        uniqueNewMovies.forEach(movie => fetchedMovieIds.add(movie.id));
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, fetchedMovieIds],
  );

  const filterMovies = useCallback(() => {
    setListFilterSearch(
      allMovies.filter(movie =>
        movie.title?.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    );
  }, [allMovies, searchInput]);

  const loadMoreMovies = useCallback(
    async (nextPage: number) => {
      if (!isFetchingMore) {
        setIsFetchingMore(true);
        setPage(nextPage);
        await fetchMovies(nextPage);
        setIsFetchingMore(false);
      }
    },
    [fetchMovies, isFetchingMore],
  );

  const handleEndReached = useCallback(() => {
    if (!isFetchingMore) {
      loadMoreMovies(page + 1);
    }
  }, [isFetchingMore, loadMoreMovies, page]);

  const handleScroll = useCallback(
    ({nativeEvent}: {nativeEvent: {contentOffset: {y: number}}}) => {
      const {contentOffset} = nativeEvent;
      if (contentOffset.y < -50 && !isFetchingMore && page > 1) {
        loadMoreMovies(page - 1);
      }
    },
    [isFetchingMore, loadMoreMovies, page],
  );

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
  const windowSize = useMemo(
    () => (allMovies.length > 50 ? Math.floor(allMovies.length / 3) : 21),
    [allMovies.length],
  );

  const initialLoadNumber = 10;
  const numToRenderPerBatch = 8;

  useEffect(() => {
    fetchMovies(page);
  }, [fetchMovies, page]);

  useEffect(() => {
    filterMovies();
  }, [filterMovies]);

  return (
    <SafeAreaView>
      <HeaderSearch
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        onDelete={() => {
          setSearchInput('');
        }}
      />
      <Spacer height={10} />
      <View style={styles.listContainer}>
        {isLoading && page === 1 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={DOTColors.secondary} />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <CardMovie
            keyExtractor={item => item.id.toString()}
            data={listFilterSearch}
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
              height: 200, //hp(230),
            }}
            styleImages={{
              width: (width - 40) / 3 - 10,
              height: 140, //hp(140)
            }}
          />
        )}
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
