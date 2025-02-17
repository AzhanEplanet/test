import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, images, pop} from '../utilities';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {BackButtonProps} from '../interface';

const BackButton: FC<BackButtonProps> = ({
  onPress,
  style,
  icon,
  iconSize,
  imgStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={() => (onPress ? onPress() : pop())}>
      <Image
        resizeMode="contain"
        source={icon || images.backArrow}
        // tintColor={icon && colors.primary}
        style={[
          {
            width: heightPixel(iconSize || 11),
            height: heightPixel(iconSize || 11),
          },
          imgStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: widthPixel(12),
    height: heightPixel(35),
    width: heightPixel(35),
    borderRadius: heightPixel(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.halfWhite,
  },
  titleStyle: {
    color: colors.gray,
    marginLeft: 5,
  },
});

export default BackButton;
