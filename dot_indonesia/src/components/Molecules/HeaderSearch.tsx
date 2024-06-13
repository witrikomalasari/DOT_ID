import {SearchIcon} from '@assets/Icons';
import {Icon} from '@rneui/themed';
import {DOTColors} from 'theme/DotColors';
import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface IHeaderSearch {
  value?: string;
  onChangeText?: (text: string) => void;
  onDelete?: () => void;
}

export const HeaderSearch: FC<IHeaderSearch> = ({
  value,
  onChangeText,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrappTextInput}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={text => onChangeText && onChangeText(text)}
          placeholder="Search Task here..."
          placeholderTextColor={DOTColors.white}
          keyboardType="ascii-capable"
        />
        <View style={styles.wrappSearchIcon}>
          <SearchIcon color={DOTColors.white} />
        </View>
        <TouchableOpacity
          style={styles.wrappDeleteIcon}
          onPress={() => onDelete && onDelete()}>
          <Icon name="clear" type="material" color={DOTColors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height: height / 8 - 10,
    backgroundColor: DOTColors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  wrappTextInput: {
    width: '100%',
    height: height / 8 - 40,
    borderWidth: 2,
    borderColor: DOTColors.border.primary,
    backgroundColor: DOTColors.middleGray,
    borderRadius: 10,
    // alignSelf: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '75%',
    height: '90%',
    // backgroundColor: 'yellow',
    marginLeft: 40,
  },
  wrappSearchIcon: {
    position: 'absolute',
    left: 10,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  wrappDeleteIcon: {position: 'absolute', right: 13},
});
