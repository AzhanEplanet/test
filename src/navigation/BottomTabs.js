import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {headerLeftTitle, headerRightMultipleIcons} from './NavigationOptions';
import {colors, icons, images, screens, utility} from '../utilities';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {CustomText, GradientTxt} from '../components';
import {Explore, Home, profile} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTitle: '',
  statusBarStyle: 'dark',
  statusBarColor: colors.white,
  animation: 'slide_from_right',
  headerShadowVisible: false,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.white,
    shadowColor: colors.transparent,
  },
};

const transparentHeaderOptions = {
  statusBarStyle: 'light',
  // statusBarTranslucent: false,
  statusBarColor: '#222457',
  headerTransparent: true,
  headerStyle: {
    backgroundColor: colors.transparent,
  },
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screens.home} component={Home} />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.explore}
        component={Explore}
        options={{
          ...headerLeftTitle('Explore'),
          ...headerRightMultipleIcons([icons.searchIcon2]),
        }}
      />
    </Stack.Navigator>
  );
};

const MemoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.memories}
        component={Memories}
        options={{
          ...headerLeftTitle('Memories'),
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.profile}
        component={profile}
        // options={{
        //   ...transparentHeaderOptions,
        //   ...headerLeftTitle('Profile', colors.white),
        // }}
      />
    </Stack.Navigator>
  );
};

const EchoStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.echoTab}
        component={DummyTab}
        // options={{...screenOptions2, title: translation['Message']}}
      />
    </Stack.Navigator>
  );
};

const DummyTab = () => (
  <View style={{flex: 1, backgroundColor: colors.lightGrey}} />
);

const tabs = [
  {
    label: 'Home',
    name: 'HomeScreen',
    initialRoute: screens.home,
    component: HomeStack,
    focusedIcon: images.homeIcon,
    icon: images.homeIcon,
  },
  {
    name: 'ExploreScreen',
    initialRoute: screens.explore,
    component: ExploreStack,
    focusedIcon: images.searchIcon,
    icon: icons.scan,
  },
  {
    label: 'Profile',
    name: 'ProfileScreen',
    initialRoute: screens.profile,
    component: ProfileStack,
    focusedIcon: images.profileIcon,
    icon: images.profileOutline,
  },
];

export default function BottomTabs() {
  const {accessToken} = useSelector(state => state.auth);

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.label,
      }}
      initialRouteName={'HomeScreen'}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={(index + Math.random()).toString()}
          name={item.name}
          component={item.component}
          options={({}) => ({
            tabBarIcon: ({focused, color}) =>
              item.label ? (
                <Image
                  resizeMode="contain"
                  source={item.icon}
                  style={[
                    styles.tabIconStyle01,
                    {tintColor: focused ? colors.primary : colors.label},
                  ]}
                />
              ) : (
                <View
                  style={[
                    styles.scanContainer,
                    {
                      borderColor: focused ? colors.primary : colors.scanIcon,
                    },
                  ]}>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={[
                      styles.tabIconStyle01,
                      {tintColor: focused && colors.primary},
                    ]}
                  />
                </View>
              ),
            tabBarLabel: ({focused, color}) =>
              item.label && (
                <CustomText
                  fontSize={11}
                  color={focused ? colors.primary : color}
                  style={{marginTop: heightPixel(1)}}
                  weight={'medium'}>
                  {item.label}
                </CustomText>
              ),

            // tabBarBadge:
            //   item.showBadge && cartList?.length > 0 && cartList?.length,
            // tabBarBadgeStyle: item.showBadge &&
            //   cartList?.length > 0 && {backgroundColor: 'red'},
          })}
          listeners={({navigation}) => ({
            tabPress: e => {
              if (item.name == 'EchoScreen') {
                e.preventDefault();
                navigation.navigate(screens.echo);
              }
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    paddingTop: heightPixel(8),
    backgroundColor: colors.bottomTab,
    height: utility.isPlatformIOS ? heightPixel(85) : heightPixel(75),
  },
  tabIconStyle01: {
    width: widthPixel(20),
    height: heightPixel(20),
  },
  tabIconStyle02: {
    width: widthPixel(55),
    height: heightPixel(55),
    marginTop: heightPixel(15),
  },
  scanContainer: {
    height: heightPixel(70.17),
    width: heightPixel(70.17),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPixel(-15),
    borderRadius: heightPixel(70.17 / 2),
    borderWidth: heightPixel(5),
    backgroundColor: colors.bottomTab,
  },
});
