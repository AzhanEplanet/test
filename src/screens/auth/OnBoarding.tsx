import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {CustomButton, CustomText} from '../../components';
import {colors, generalImages, navigate, screens} from '../../utilities';
import {heightPixel, widthPixel} from '../../utilities/helpers';

const {width} = Dimensions.get('window');

const onBoarding = () => {
  const handleNextPress = () => {
    navigate(screens.login);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slide}>
        <Image source={generalImages.onBoarding} style={styles.image} />
      </View>

      <CustomButton
        onPress={handleNextPress}
        title={'Get Started'}
        btnStyle={styles.btnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  slide: {
    width,
    alignItems: 'center',
    height: '80%',
    justifyContent: 'center',
  },
  image: {
    width: widthPixel(148.67),
    height: heightPixel(239.98),
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    marginTop: heightPixel(54),
  },
  btnStyle: {
    width: widthPixel(330),
    alignSelf: 'center',
    // marginTop: heightPixel(204),
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    width: '100%',
    marginTop: heightPixel(51),
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,

    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default onBoarding;
