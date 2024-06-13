import {DOTColors} from 'theme/DotColors';
import React, {FC, ReactNode} from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';
import {DOTText} from '@components/Molecules';

interface IDOTButton {
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'large' | 'x-small';
  rounded?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  colors?: string;
}

export const DOTButton: FC<IDOTButton> = ({
  disabled,
  onPress,
  title,
  variant = 'solid',
  size = 'small',
  rounded = true,
  leftIcon,
  rightIcon,
  colors = '',
}) => {
  let ButtonStyle: ViewStyle = ButtonPreset[variant]; // buttonPreset[solid atau outline tergantung pengisian di props parents]

  if (disabled) ButtonStyle = {...ButtonStyle, backgroundColor: DOTColors.gray};

  // cuman beda di borderRadius tombol lebih bulat, klo tombol solid dan outline border radius 8
  if (rounded) ButtonStyle = {...ButtonStyle, borderRadius: 80};

  // styling for text
  let textColors = variant === 'solid' ? 'white' : DOTColors.primary;

  if (colors !== '') {
    // jika colors tidak kosong dan variantnya adalah 'outline'
    if (variant === 'outline') {
      // klo mo manggil si buttonStyle kembali untuk dipengubahan atau edit stylingnya
      ButtonStyle = {
        ...ButtonStyle,
        backgroundColor: 'white',
        borderColor: colors, // menDinamiskan kembali borderColor/ditiban dengan borderColor baru
      };
      textColors = colors; // menDinamiskan kembali textColors/ditiban dengan text warna yg baru
    } else ButtonStyle = {...ButtonStyle, backgroundColor: colors};
  }

  return (
    <Pressable
      style={{
        ...ButtonStyle,
        paddingVertical: size === 'large' ? 16 : size === 'x-small' ? 8 : 12,
      }}
      onPress={() => onPress && !disabled && onPress()}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {leftIcon}
        {<Spacer width={6} />}
        <DOTText
          textType="bold"
          style={{textAlign: 'center'}}
          fontColors={textColors}
          fontSize={14}>
          {title}
        </DOTText>
        <Spacer width={6} />
        {rightIcon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // styling tuk frame/line dan warna, tidak untuk textnya
  solid: {
    // full warna
    backgroundColor: DOTColors.primary,
    paddingVertical: 16,
    borderRadius: 8,
  },
  outline: {
    // hanya garis frame buttonnya
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DOTColors.primary,
  },
});

// berbagai macam button taro disini
const ButtonPreset = {
  solid: styles.solid,
  outline: styles.outline,
};

export default DOTButton;
