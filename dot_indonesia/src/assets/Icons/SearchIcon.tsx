import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconTypeProps from './typeInterface';
import {SVGWrapper} from '@components/Atom';

const SearchIcon: FC<IconTypeProps> = ({width = 20, height = 20, color}) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={20 / 20}
      children={
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66666 9.58332 1.66666C5.21107 1.66666 1.66666 5.21108 1.66666 9.58333C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z"
            stroke={color} //"white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M18.3333 18.3333L16.6667 16.6667"
            stroke={color} //"white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default SearchIcon;
