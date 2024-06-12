import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconTypeProps from './typeInterface';
import {SVGWrapper} from '@components/Atom';

export const ArrowLeft: FC<IconTypeProps> = ({
  width = 24,
  height = 24,
  color,
}) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M15.5 19L8.5 12L15.5 5"
            stroke={color} //"#2F2D2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default ArrowLeft;
