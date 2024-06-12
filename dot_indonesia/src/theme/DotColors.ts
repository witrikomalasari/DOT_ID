const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#11B116',
  blue1: '#2F89FC',
  blue2: '#EDF8FF',
  blue3: '#4187D1',
  blue4: '#2B495D',
  blue5: '#0066CB',
  dark1: '#112340',
  dark2: '#000000',
  dark3: '#495A75',
  dark4: '#8092AF',
  grey1: '#7D8797',
  gray2: '#72768B',
  grey2: '#E9E9E9',
  grey3: '#EEEEEE',
  grey4: '#EDEEF0',
  grey5: '#C4C4C4',
  grey6: '#B1B7C2',
  grey7: '#343A40',
  grey8: '#F4F5F7',
  white: '#ffffff',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  black3: 'rgba(52, 58, 64, 0.4)',
  red1: '#FA5959',

  success: '#11B116',
  background: '#EFEFED',

  error: 'red',
};

export const DOTColors = {
  primary: mainColors.red1,
  secondary: mainColors.dark1,

  lightGray: mainColors.grey5,
  middleGray: mainColors.grey7,

  white: mainColors.white,
  black: mainColors.dark2,
  blue: mainColors.blue5,
  gray: mainColors.grey1,
  shadow: mainColors.black2,

  disable: mainColors.grey5,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.error,

  text: {
    primary: mainColors.red1,
    secondary: mainColors.grey1,
    white: mainColors.white,
    menuInactive: mainColors.dark3,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark4,
    black: mainColors.dark2,
  },

  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark2,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.grey5,
    },
  },

  border: {
    primary: mainColors.grey3,
    secondary: mainColors.blue5,
    borderError: mainColors.error,
  },
};
