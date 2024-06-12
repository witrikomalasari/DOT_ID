module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./RemittanceApp'],
        extensions: [
          '.js',
          '.jsx',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigators': './src/navigators',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@API': './src/API',
          '@redux': './src/redux',
          '@models': './src/models',
        },
      },
    ],
  ],
};
