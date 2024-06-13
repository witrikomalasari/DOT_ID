import React, {FC, useCallback, useState} from 'react';
import {Alert, Button, Dimensions, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import {Spacer} from '@components/Atom';
import {useAppSelector} from '@hooks/useAppSelector';
import {DOTColors} from 'theme/DotColors';
import {Video} from '@models/movieInterface';

const {width} = Dimensions.get('window');

interface IPlayVideo {}

const PlayVideo: FC<IPlayVideo> = () => {
  const {videoMovies = []} = useAppSelector(state => state.movies) as {
    videoMovies: Video[];
  };
  const [playing, setPlaying] = useState<boolean>(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  // console.log('movieKEY', JSON.stringify(videoMovies[0].key, null, 2));
  const trailer = videoMovies?.find((video: Video) => video.type === 'Trailer');
  const videoId = trailer?.key ?? 'Default Video ID';

  return (
    <View style={{flex: 1, backgroundColor: '#020202'}}>
      <Spacer height={10} />
      <YoutubePlayer
        height={width / 1.5}
        play={playing}
        videoId={videoId as string}
        onChangeState={onStateChange}
      />
      <Spacer height={10} />
      <Button
        color={DOTColors.primary}
        title={playing ? 'Pause' : 'Play'}
        onPress={togglePlaying}
      />
    </View>
  );
};

export default PlayVideo;
