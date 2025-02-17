import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import { images } from '../utilities';
import { UploadedImageProps } from '../interface';


const UploadedImage: FC<UploadedImageProps> = ({
  isVideo,
  image,
  showCrossIcon = true,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image || images.listItem01} style={styles.uploadedImg} />

      {showCrossIcon && (
        <TouchableOpacity activeOpacity={0.8} style={styles.crossIconStyle}>
          <Image
            resizeMode="contain"
            source={images.crossIcon2}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      )}

      {isVideo && (
        <View style={styles.playIconView}>
          <Image
            resizeMode="contain"
            source={images.playIcon}
            style={{ width: 40, height: 40 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    marginRight: 15,
    marginBottom: 15,
  },
  uploadedImg: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  crossIconStyle: {
    top: -5,
    right: -5,
    zIndex: 10,
    position: 'absolute',
  },
  playIconView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadedImage;
