import React, {FC, useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {IMAGE_URL} from '@API/DotAPI';
import {Spacer} from '@components/Atom';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {DetailScreenRouteProps} from '@navigators/navigatorParams';
import {useRoute} from '@react-navigation/native';
import {getMovieDetail, getVideoMovie} from '@redux/actions/movieAsynchron';
import {Icon} from '@rneui/themed';
import {DOTColors} from 'theme/DotColors';
import {type} from 'theme/DotFonts';

export interface IDetailScreen {}

const DetailScreen: FC<IDetailScreen> = () => {
  const route = useRoute<DetailScreenRouteProps>();
  const dispatch = useAppDispatch();
  const navigation = useBaseNavigation();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const {id, backdrop_path, overview, title, vote_average} = route.params;

  useEffect(() => {
    if (id) {
      dispatch(getVideoMovie(id));
      dispatch(getMovieDetail(id));
    }
  }, [dispatch, id]);

  const renderHeaderSection = () => (
    <ImageBackground
      source={{uri: `${IMAGE_URL}/${backdrop_path}`}}
      resizeMode="cover"
      style={styles.headerImageBackground}
      onError={() => console.log('Image loading failed')}>
      <View style={styles.headerImageContent}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#000']}
          style={styles.headerLinearGradient}>
          <Text style={styles.title}>{title}</Text>
          {renderVideoAndRating()}
        </LinearGradient>
      </View>
    </ImageBackground>
  );

  const renderVideoAndRating = () => (
    <View style={styles.videoAndRatingContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.playButton}
        onPress={() => {
          navigation.navigate('PlayVideo');
        }}>
        <Icon
          name="play-circle"
          type="feather"
          size={55}
          color={DOTColors.lightGray}
        />
        <Text style={styles.playButtonText}>Play Trailer</Text>
      </TouchableOpacity>
      <Spacer height={20} />
      <View style={styles.ratingContainer}>
        <Icon type="material" name="star" color="yellow" size={15} />
        <Text style={styles.ratingText}>{Math.round(vote_average!)}</Text>
      </View>
      <Spacer height={20} />
    </View>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}>
      {renderHeaderSection()}
      <Spacer height={10} />
      <View style={styles.contentContainer}>
        <View style={styles.overviewContainer}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setIsFavorite(!isFavorite)}>
              <Icon
                type="material"
                name="favorite"
                size={30}
                color={isFavorite ? 'red' : 'black'}
              />
              <Spacer height={5} />
              <Text style={styles.actionButtonText}>Favorite</Text>
            </TouchableOpacity>
            <Spacer width={20} />
            <TouchableOpacity style={styles.actionButton}>
              <Icon type="feather" name="film" size={30} color="black" />
              <Text style={styles.actionButtonText}>Add {'\n'} WatchList</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Spacer height={10} />
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerImageBackground: {
    width: '100%',
    height: 450,
  },
  headerImageContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerLinearGradient: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: DOTColors.text.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  videoAndRatingContainer: {
    marginTop: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 140,
    height: 60,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    bottom: 150,
    right: 10,
    marginHorizontal: -75,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  playButtonText: {
    color: DOTColors.text.white,
    fontFamily: type.SFProSemiBold,
    fontSize: 14,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DOTColors.middleGray,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  ratingText: {
    color: DOTColors.text.white,
    fontSize: 12,
    marginHorizontal: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  contentContainer: {
    marginHorizontal: 10,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewTitle: {
    fontSize: 18,
    color: DOTColors.text.black,
    fontWeight: 'bold',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  },
  actionButton: {
    width: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: DOTColors.text.black,
    textAlign: 'center',
  },
  overviewText: {
    fontSize: 14,
    color: DOTColors.text.secondary,
    textAlign: 'justify',
  },
});
