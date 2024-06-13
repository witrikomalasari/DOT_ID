import {type, weight} from 'theme/DotFonts';
import {TextStyle} from 'react-native';

export type DOTTextType = 'header' | 'normal' | 'bold';

export const weightPreset: {[id: string]: TextStyle} = {
  normal: {fontWeight: weight.normal},
  semiBold: {fontWeight: weight.semibold},
  bold: {fontWeight: weight.bold},
  extraBold: {fontWeight: weight.extraBold},
};

const normal: TextStyle = {
  fontWeight: weight.normal,
  fontFamily: type.openSans,
  fontSize: 14,
  lineHeight: 16,
};

const bold: TextStyle = {
  fontWeight: weight.extraBold,
  fontFamily: type.SFProSemiBold,
  fontSize: 14,
  lineHeight: 16,
};

const header: TextStyle = {
  fontWeight: weight.extraBold, // weight
  fontFamily: type.SFProSemiBold, // jenis font
  fontSize: 16, // size
  lineHeight: 16, // line
};

export const Preset: {[id: string]: TextStyle} = {
  normal: normal,
  bold: bold,
  header: header,
};
