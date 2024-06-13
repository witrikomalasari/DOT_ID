import {HeaderApp} from '@components/Molecules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '@screens/Beranda/Beranda';
import FavoriteScreen from '@screens/Favorite/FavoriteScreen';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeTab, TabBarIconProps} from './HomeTabIcon';
import {DOTColors} from '@theme/DotColors';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        lazy: true,
        headerShown: false,
        tabBarIcon: (props: TabBarIconProps) => HomeTab(props, route),
        tabBarStyle: {
          backgroundColor: DOTColors.black,
          height: 55,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
          shadowColor: DOTColors.shadow,
          shadowOpacity: 0.6,
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 15,
          paddingBottom: 5,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: DOTColors.white,
        tabBarInactiveTintColor: DOTColors.gray,
      })}>
      <Tab.Screen name="All List" component={Beranda} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={DummyPage} />
    </Tab.Navigator>
  );
};
const DummyPage = () => {
  return (
    <SafeAreaView>
      <HeaderApp />
    </SafeAreaView>
  );
};

export default Home;
