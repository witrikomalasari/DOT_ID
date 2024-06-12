import {FavoriteIcon, HomeIcon, ProfileIcon} from '@assets/Icons';
import {HeaderApp} from '@components/Molecules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '@screens/Beranda/Beranda';
import FavoriteScreen from '@screens/Favorite/FavoriteScreen';
import {DOTColors} from '@theme/DotColors';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={() => ({
        lazy: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: DOTColors.secondary,
          height: 55,
          borderTopWidth: 0,
          // borderTopLeftRadius: 20,
          elevation: 10,
          shadowColor: DOTColors.shadow,
          shadowOpacity: 0.6,
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 15,
          paddingBottom: 5,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: DOTColors.primary,
        tabBarInactiveTintColor: DOTColors.gray,
      })}>
      <Tab.Screen
        name="All List"
        component={Beranda}
        options={{
          tabBarIcon: ({color}) => <HomeIcon width={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => <FavoriteIcon width={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DummyPage}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon width={26} color={color} />,
        }}
      />
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
