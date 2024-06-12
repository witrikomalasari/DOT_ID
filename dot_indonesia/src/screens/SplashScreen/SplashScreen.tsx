import {images} from '@assets/Images';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import React, {FC, useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('window');

interface ISplashScreen {}

const SplashScreen: FC<ISplashScreen> = () => {
  const navigation = useBaseNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={images.SplashImage} style={{width, height}} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
