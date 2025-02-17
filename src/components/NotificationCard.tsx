import React,{FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {appStyles, colors, fontStyles} from '../utilities';
import { INotificationCard } from '../interface';

const NotificationCard : FC<INotificationCard> = ({item, lastItem}) =>{
  const navigation = useNavigation();

  // const onPressNotification = () => {
  //   switch (item.identifier) {
  //     case 'follow_request':
  //       navigation.navigate(screens.followers, {tab: 1});
  //       break;
  //     case 'accept_request':
  //       navigation.navigate(screens.following);
  //       break;
  //     case 'post_like':
  //       navigation.navigate(screens.postDetail, {
  //         showMoreIcon: true,
  //         data: {slug: item.reference_slug},
  //       });
  //       break;
  //     case 'post_comment':
  //       navigation.navigate(screens.postDetail, {
  //         showMoreIcon: true,
  //         data: {slug: item.reference_slug},
  //       });
  //       break;
  //   }
  // };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.container]}
        onPress={() => {}}>
        <View style={[styles.iconView]}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: item.iconSize || 18,
              height: item.iconSize || 18,
            }}
          />
        </View>

        <View style={styles.content}>
          <Text
            numberOfLines={1}
            style={[fontStyles.semiBoldText14, {color: colors.secondary}]}>
            {item.title}
          </Text>

          <Text
            numberOfLines={2}
            style={[
              fontStyles.regularText10,
              {color: colors.gray, marginTop: 2},
            ]}>
            Tap to view details
          </Text>
        </View>

        <Text
          numberOfLines={2}
          style={[fontStyles.regularText10, styles.timeStyle]}>
          01:36 am
        </Text>

        {item.image && item?.image !== '' && (
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.imgStyle}
          />
        )}
      </TouchableOpacity>

      {!lastItem && <View style={appStyles.lineSeparator} />}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  textStyle: {
    lineHeight: 16,
    marginVertical: 8,
    color: colors.gray,
  },
  timeStyle: {
    alignSelf: 'flex-end',
    color: colors.gray,
  },
  badgeIndicator: {
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: colors.primary,
  },
  iconView: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  iconStyle: {
    width: 18,
    height: 18,
  },
  imgStyle: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
});

export default NotificationCard;