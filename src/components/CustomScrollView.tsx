import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, ImageBackground} from 'react-native';
import {heightPixel, vh, widthPixel} from '../utilities/helpers';
import {ICustomScrolllView} from '../interface';
import {colors, appStyles, generalImages} from '../utilities';

const CustomScrollView: FC<ICustomScrolllView> = props => {
  const {
    style,
    children,
    horizontal,
    isMarginTop,
    scroll,
    contentContainerStyle,
    showBackground,
  } = props;
  const CustomWrapper = scroll ? ScrollView : View;
  const Content = (
    <CustomWrapper
      bounces={false}
      horizontal={horizontal}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      style={[styles.scrollView, style]}
      contentContainerStyle={[
        contentContainerStyle,
        isMarginTop && !horizontal && appStyles.marginTop,
      ]}
      {...props}>
      {children}
    </CustomWrapper>
  );

  return showBackground ? (
    <ImageBackground
      source={generalImages.backgroundImage}
      style={styles.container}
      resizeMode="stretch">
      {Content}
    </ImageBackground>
  ) : (
    Content
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: widthPixel(15),
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flexGrow: 1,
  },
});

export default CustomScrollView;
