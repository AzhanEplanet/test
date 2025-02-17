import React, {FC, useRef, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {HorizontalTabsProps} from '../interface';
import CustomText from './CustomText';
import {colors} from '../utilities';

const HorizontalTabs: FC<HorizontalTabsProps> = ({tabs = [], onPressTab}) => {
  const flatListRef = useRef<FlatList>(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onSelectTab = (tab: string, index: number) => {
    flatListRef?.current?.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5,
    });
    setSelectedTab(tab);
    onPressTab?.(tab);
  };

  return (
    <FlatList
      horizontal
      data={tabs}
      bounces={false}
      ref={flatListRef}
      // inverted={utility.isRTL}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{paddingHorizontal: 15}}
      renderItem={({item, index}) => {
        const isSelected = selectedTab == item;

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => onSelectTab(item, index)}
            style={[
              styles.tabContainer,
              isSelected && {backgroundColor: colors.blackShade},
            ]}>
            <CustomText
              fontSize={12}
              weight={isSelected ? 'bold' : 'medium'}
              color={isSelected ? colors.white : colors.blackShade}>
              {item}
            </CustomText>
          </TouchableOpacity>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPixel(34),
    marginRight: widthPixel(8),
    borderRadius: heightPixel(34),
    paddingHorizontal: widthPixel(18),
    backgroundColor: colors.halfWhite,
  },
});

export default HorizontalTabs;
