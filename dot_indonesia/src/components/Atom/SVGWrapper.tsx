import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';

export interface ISVGWrapper {
  width: number;
  height: number;
  aspectRatio: number;
  children: ReactNode;
}

export const SVGWrapper: FC<ISVGWrapper> = ({
  width,
  height,
  aspectRatio,
  children,
}) => {
  return (
    <View style={{width, height}}>
      <View style={{aspectRatio}}>{children}</View>
    </View>
  );
};

export default SVGWrapper;
