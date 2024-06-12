import React, {FC} from 'react';
import {View} from 'react-native';

interface ISpacer {
  width?: number;
  height?: number;
}

export const Spacer: FC<ISpacer> = ({width, height}) => {
  return <View style={{width, height}} />;
};
export default Spacer;
