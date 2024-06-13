import {IMAGE_URL} from '@API/DotAPI';
import {Spacer} from '@components/Atom';
import {Movie} from '@models/movieInterface';
import {NavigationProp} from '@react-navigation/native';
import {DOTColors} from '@theme/DotColors';
import dayjs from 'dayjs';
import React, {FC, ReactNode, useCallback, useMemo} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type CardMovieProps = {
  data: Movie[];
  navigation: NavigationProp<any>;
  styleContent?: object;
  styleImages?: object;
  keyExtractor: (item: Movie) => string;
  numColumns?: number;
  horizontal?: boolean;
  bounces?: boolean;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  showsVerticalScrollIndicator?: boolean;
  windowSize?: number;
  initialNumToRender?: number;
  maxToRenderPerBatch?: number;
  updateCellsBatchingPeriod?: number;
  ListFooterComponent?: () => ReactNode | null;
  ListEmptyComponent?: () => ReactNode;
  onScroll?: (event: any) => void;
};

const CardMovie: FC<CardMovieProps> = ({
  data = [],
  navigation,
  styleContent,
  styleImages,
  keyExtractor,
  horizontal,
  ListFooterComponent,
  ListEmptyComponent,
  ...restProps // Rest operator to capture all other props not explicitly destructured
}) => {
  const handleToMovieDetail = useCallback(
    async (movieData: Movie) => {
      navigation.navigate('Detail', movieData);
    },
    [navigation],
  );

  const handleReleaseDate = (dateTime: string) => {
    const formatDates = 'ddd DD, YYYY';
    return dayjs(dateTime).format(formatDates);
  };

  const renderPoster = useCallback(
    ({item}: ListRenderItemInfo<Movie>) => (
      <View key={`${item.id}_${item.title}`}>
        <TouchableOpacity
          style={[styles.content, styleContent]}
          onPress={() => handleToMovieDetail(item)}>
          <Image
            source={{uri: `${IMAGE_URL}${item.poster_path}`}}
            resizeMode="cover"
            style={[styles.image, styleImages]}
          />
          <Spacer height={5} />
          <Text style={styles.txt} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Spacer height={2} />
          <Text style={[styles.txt, {fontSize: 11}]}>
            {handleReleaseDate(item.release_date!)}
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [handleToMovieDetail, styleContent, styleImages],
  );

  const memoizedRenderPoster = useMemo(() => renderPoster, [renderPoster]);
  const memoizedData = useMemo(() => data, [data]);
  const memoizedKeyExtractor = useCallback(keyExtractor, [keyExtractor]);

  return (
    <View style={styles.container}>
      <Spacer height={10} />
      {/* <SubCategory
        type={props.type}
        titleCategory={props.titleCategory}
        navigation={props.onPress}
      /> */}

      {data.length > 0 ? (
        <FlatList
          data={memoizedData}
          renderItem={memoizedRenderPoster}
          keyExtractor={memoizedKeyExtractor}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
          {...restProps}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[styles.txt, {color: DOTColors.secondary, fontSize: 14}]}>
            Opps...Movie not found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DOTColors.white,
  },
  content: {
    width: 90, // wp(90),
    height: 195, //hp(195),
    backgroundColor: DOTColors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 6,
    // backgroundColor: 'red',
  },
  image: {
    width: 90, //wp(90),
    height: 140, //hp(140),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: DOTColors.primary,
    fontSize: 12,
    // fontFamily: fonts.primary['700'],
    textAlign: 'center',
  },
});
