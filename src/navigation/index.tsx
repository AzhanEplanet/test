import React, {forwardRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainStack';
import {colors} from '../utilities';

const DefaultTheme = {
  // dark: false,
  colors: {
    background: colors.white,
  },
};

const RootNavigation = forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <MainNavigation />
    </NavigationContainer>
  );
});

export default RootNavigation;
