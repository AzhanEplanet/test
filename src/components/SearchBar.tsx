import React, {FC, useState} from 'react';
import {Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {font, heightPixel, widthPixel} from '../utilities/helpers';
import {colors, fontFamily, icons, images} from '../utilities';
import {ISearchBar} from '../interface';

const SearchBar: FC<ISearchBar> = props => {
  const {onPress, onPressFilter, placeholder, containerStyle} = props;

  const [searchText, setSearchText] = useState('');

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={!onPress}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image
        resizeMode="contain"
        source={icons.searchBarIcon}
        style={styles.iconStyle}
      />

      <TextInput
        {...props}
        onPressIn={onPress}
        value={searchText}
        editable={!onPress}
        onChangeText={setSearchText}
        placeholderTextColor={colors.gray}
        placeholder={placeholder || 'Search people...'}
        style={[styles.textInputStyle]}
      />

      {/* <TouchableOpacity activeOpacity={0.7} onPress={onPressFilter}>
        <Image
          resizeMode="contain"
          source={images.filterIcon}
          style={styles.iconStyle}
        />
      </TouchableOpacity> */}

      {/* {value !== '' && (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeText('')}>
          <Image
            resizeMode="contain"
            source={images.crossIconOutline}
            style={[styles.iconStyle, {tintColor: colors.white}]}
          />
        </TouchableOpacity>
      )} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPixel(10),
    borderRadius: heightPixel(12),
    marginHorizontal: widthPixel(20),
    paddingVertical: widthPixel(3),
    paddingHorizontal: widthPixel(20),
    backgroundColor: colors.halfWhite,
  },
  iconStyle: {
    width: heightPixel(14),
    height: heightPixel(14),
  },
  textInputStyle: {
    flex: 1,
    height: 45,
    padding: 0,
    color: colors.gray,
    marginHorizontal: 10,
    fontSize: font(12),
    fontFamily: fontFamily.regular,
  },
});

export default SearchBar;
