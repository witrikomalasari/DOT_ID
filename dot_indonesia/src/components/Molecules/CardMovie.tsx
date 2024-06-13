import {IMAGE_URL} from '@API/DotAPI';
import {Spacer} from '@components/Atom';
import {Movie} from '@models/movieInterface';
import {NavigationProp} from '@react-navigation/native';
import {DOTColors} from '@theme/DotColors';
import {type} from '@theme/DotFonts';
import dayjs from 'dayjs';
import React, {FC, memo, ReactNode, useCallback, useMemo} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
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
  keyExtractor: (item: Movie, index: number) => string;
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
  ListEmptyComponent?: () => ReactNode | null;
  onScroll?: (event: any) => void;
};

const RenderItem: FC<{
  item: Movie;
  navigation: NavigationProp<any>;
  styleContent?: object;
  styleImages?: object;
}> = memo(({item, navigation, styleContent, styleImages}) => {
  // console.log('item', item);
  const handleToMovieDetail = useCallback(
    async (movieData: Movie) => {
      await navigation.navigate('DetailScreen', movieData);
    },
    [navigation],
  );

  const handleReleaseDate = useCallback((dateTime: string) => {
    const formatDates = 'ddd DD, YYYY';
    return dayjs(dateTime).format(formatDates);
  }, []);

  return (
    <View
      key={`${item.id}_${item.title}`}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={[styles.content, styleContent]}
        onPress={() => handleToMovieDetail(item)}>
        <Image
          source={{uri: `${IMAGE_URL}${item.poster_path}`}}
          resizeMode="cover"
          style={[styles.image, styleImages]}
        />
        <Spacer height={10} />
        <Text
          style={[styles.txt, {fontWeight: '800'}]}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.title}
        </Text>
        <Spacer height={5} />
        <Text style={[styles.txt, {fontSize: 11}]}>
          {handleReleaseDate(item.release_date!)}
        </Text>
      </TouchableOpacity>
    </View>
  );
});

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
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <RenderItem
      item={item}
      navigation={navigation}
      styleContent={styleContent}
      styleImages={styleImages}
    />
  );

  const memoizedData = useMemo(() => data, [data]);
  const memoizedKeyExtractor = useCallback(keyExtractor, [keyExtractor]);

  return (
    <View style={styles.container}>
      <Spacer height={10} />
      {data.length > 0 ? (
        <FlatList
          data={memoizedData}
          renderItem={renderItem}
          keyExtractor={memoizedKeyExtractor}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
          {...restProps}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[styles.txt, {color: DOTColors.secondary, fontSize: 14}]}>
            Opps...Movie not found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default memo(CardMovie);

const styles = StyleSheet.create({
  container: {
    backgroundColor: DOTColors.white,
  },
  content: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 6,
    backgroundColor: DOTColors.white,
    marginBottom: 20,
  },
  image: {
    width: 90, //wp(90),
    height: 140, //hp(140),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: DOTColors.secondary,
    fontSize: 12,
    fontFamily: type.SFProSemiBold,
    textAlign: 'center',
  },
});
