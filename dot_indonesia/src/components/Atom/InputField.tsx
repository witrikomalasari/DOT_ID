import {DOTColors} from '@theme/DotColors';
import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';
import {DOTText} from '@components/Molecules';

interface IInputFieldProps {
  value?: string;
  placeHolder?: string;
  onChange?: (text: string) => void;
  title?: string;
  type?: 'text' | 'password' | 'number';
  errorText?: string;
  placeHolderTextColor?: string;
  isLabel?: boolean;
}

export const InputField: FC<IInputFieldProps> = ({
  value,
  placeHolder,
  onChange,
  isLabel,
  title,
  type = 'text',
  errorText = '',
  placeHolderTextColor,
}) => {
  const [uiValue, setUiValue] = useState<string>(value ? value : '');

  let containerStyle: ViewStyle = styles.textContainer;

  if (errorText !== '')
    containerStyle = {...containerStyle, borderColor: DOTColors.error};

  return (
    <View style={styles.container}>
      {isLabel && (
        <>
          <DOTText
            fontSize={16}
            fontWeight="bold"
            textType="header"
            fontColors={DOTColors.text.subTitle}>
            {title}
          </DOTText>
          <Spacer height={8} />
        </>
      )}
      <TextInput
        keyboardType={type === 'text' ? 'ascii-capable' : 'number-pad'}
        style={containerStyle}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        value={uiValue}
        onChangeText={text => {
          setUiValue(text);
          onChange && onChange(text);
        }}
      />
      <Spacer height={5} />
      {errorText ? (
        <DOTText style={{color: 'red', paddingLeft: 5}}>{errorText}</DOTText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 0,
    color: DOTColors.text.black,
  },
});

export default InputField;
