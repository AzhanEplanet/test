import React from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from '../components';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {appStyles} from '../utilities';

const headerLeftTitle = (title: string, color: string) => {
  return {
    headerLeft: () => (
      <CustomText fontSize={20} weight="bold" color={color}>
        {title}
      </CustomText>
    ),
  };
};

const headerRightMultipleIcons = (icons: any[], size: number) => {
  return {
    headerRight: () => (
      <View style={[appStyles.flexRow as ViewStyle]}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7}>
            <Image
              resizeMode="contain"
              source={icon}
              style={{
                marginLeft: widthPixel(10),
                width: heightPixel(size || 20),
                height: heightPixel(size || 20),
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    ),
  };
};

const styles = StyleSheet.create({});

export {headerLeftTitle, headerRightMultipleIcons};
