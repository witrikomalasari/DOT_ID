import {MainNavigator} from '@navigators/MainNavigator';
import React, {FC} from 'react';

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return <MainNavigator />;
};

export default App;
