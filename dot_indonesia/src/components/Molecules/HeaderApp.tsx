import {ArrowLeft} from '@assets/Icons';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {DOTColors} from 'theme/DotColors';
import {type} from 'theme/DotFonts';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DOTText from './DotText/DotText';

interface IHeaderAppProps {
  headerName?: string;
}

export const HeaderApp: FC<IHeaderAppProps> = ({headerName}) => {
  const navigation = useBaseNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
        // style={{backgroundColor: 'red'}}
      >
        <ArrowLeft color={DOTColors.text.black} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <DOTText
          textType="bold"
          fontSize={16}
          fontColors={DOTColors.text.white}
          style={{
            fontFamily: type.openSansSemiBold,
            letterSpacing: 2,
            textAlign: 'center',
            paddingRight: 32,
          }}>
          {headerName}
        </DOTText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: DOTColors.primary,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default HeaderApp;
