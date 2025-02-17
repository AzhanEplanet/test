import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {colors, screens} from '../utilities';
import AuthNavigator from './AuthStack';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const screenOptions = {
  statusBarStyle: 'dark',
  statusBarColor: colors.white,
  animation: 'slide_from_right',
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.white,
    shadowColor: colors.transparent,
  },
  // headerLeft: () => <BackButton style={{marginRight: 10}} />,
};

const basicHeaderOptions = title => {
  return {
    statusBarStyle: 'dark',
    statusBarColor: colors.white,
    // header: () => <BasicHeader title={title} />,
  };
};

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.bottomTabs}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
