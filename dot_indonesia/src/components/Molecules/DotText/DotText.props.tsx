import {ColorValue, TextProps, TextStyle} from 'react-native';
import {DOTTextType} from './DotText.preset';

export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <DOTText size={16}>Some text</DOTText>
   * <DOTText size="16">Some text</DOTText>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <DOTText fontWeight="normal">Some text</DOTText>
   * **/

  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <DOTText textType="body">Some text</DOTText>
   * **/
  textType?: DOTTextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <DOTText color="#343A40">Some text</DOTText>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <DOTText lineHeight={20}>Some text</DOTText>
   * **/
  textLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <DOTText style={{numberOfLines: 1}}>Some text</DOTText>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
