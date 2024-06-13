import {TextStyle} from 'react-native';

const size = {
  font10: 10,
  font12: 12,
  font13: 13,
  font14: 14,
  font16: 16,
  font18: 18,
  font20: 20,
  font22: 22,
  font24: 24,
};

const weight = {
  normal: '400' as TextStyle['fontWeight'],
  semibold: '500' as TextStyle['fontWeight'],
  bold: '600' as TextStyle['fontWeight'],
  extraBold: '800' as TextStyle['fontWeight'],
};

const type = {
  openSans: 'OpenSans-Regular',
  openSansSemiBold: 'OpenSans-SemiBold',
  SFPro: 'SF-Pro-Text-Regular',
  SFProSemiBold: 'SF-Pro-Text-Semibold',
};

export {size, weight, type};
