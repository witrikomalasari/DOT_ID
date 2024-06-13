import React from 'react';
import {FavoriteIcon, HomeIcon, ProfileIcon} from '@assets/Icons';
import {DOTColors} from '@theme/DotColors';

export interface TabBarIconProps {
  focused: boolean;
  color?: string;
  size?: number;
}

interface Route {
  name: string;
}

export const HomeTab = ({focused, color}: TabBarIconProps, route: Route) => {
  let IconComponent: JSX.Element | null;
  const focusedColor = focused ? DOTColors.white : color; // Change 'blue' to your desired focused color

  switch (route.name) {
    case 'All List':
      IconComponent = <HomeIcon width={25} height={25} color={focusedColor} />;
      break;
    case 'FavoriteScreen':
      IconComponent = <FavoriteIcon width={26} color={focusedColor} />;
      break;
    case 'Profile':
      IconComponent = <ProfileIcon width={26} color={focusedColor} />;
      break;
    default:
      IconComponent = null;
      break;
  }

  if (!IconComponent) {
    console.warn(`No IconComponent rendered for route: ${route.name}`);
  }

  return IconComponent;
};
