import {Movie} from '@models/movieInterface';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '@screens/Detail/Detail';
import Home from '@screens/Home/Home';
import PlayVideo from '@screens/PlayVideo/PlayVideo';
import SplashScreen from '@screens/SplashScreen/SplashScreen';
import React, {ComponentProps, Fragment} from 'react';

export type NavigatorParamList = {
  SplashScreen: undefined;
  Home: undefined;
  DetailScreen: Movie;
  PlayVideo: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="PlayVideo" component={PlayVideo} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}
      initialRouteName="SplashScreen">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      theme={DOTTheme}
      {...props} //to stop navigation persistence
    >
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator';

const exitRoutes = ['SplashScreen'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const DOTTheme = {
  ...DefaultTheme,
  DarkTheme: false,
  colors: {
    ...DefaultTheme.colors,
  },
};
