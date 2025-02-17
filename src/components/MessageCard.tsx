import React, {FC, memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, navigate, screens} from '../utilities';
import {heightPixel} from '../utilities/helpers';
import {MessageCardProps} from '../interface';
import CustomText from './CustomText';
import GradientView from './GradientView';

const AVATAR_SIZE = heightPixel(62);
const STORY_SIZE = heightPixel(58);
const BADGE_SIZE = heightPixel(20);
const TITLE_SIZE = 14;
const MESSAGE_SIZE = 12;
const TIME_SIZE = 10;

const MessageBadge = memo(({count}: {count: number}) => (
  <GradientView style={styles.countView}>
    <CustomText weight="bold" fontSize={TIME_SIZE} color={colors.white}>
      {count > 9 ? '9+' : count}
    </CustomText>
  </GradientView>
));

const MessageCard: FC<MessageCardProps> = ({item}) => {
  const handleReelPress = useCallback(() => {
    console.log('reel');
  }, []);

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={styles.container}>
        {item?.reel ? (
          <GradientView style={styles.imgStyle}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleReelPress}>
              <Image source={item?.image} style={styles.storyImage} />
            </TouchableOpacity>
          </GradientView>
        ) : (
          <Image source={item?.image} style={styles.imgStyle} />
        )}

        <View style={styles.mainContent}>
          <CustomText weight="semibold" fontSize={TITLE_SIZE} numberOfLines={1}>
            {item?.title}
          </CustomText>

          <CustomText
            weight="medium"
            fontSize={MESSAGE_SIZE}
            numberOfLines={1}
            color={colors.textGrey}
            style={styles.messageText}>
            {item?.message}
          </CustomText>
        </View>

        <View style={styles.timeView}>
          <CustomText
            weight="semibold"
            fontSize={TIME_SIZE}
            color={colors.greish}>
            11:45 PM
          </CustomText>

          {item?.messageCount !== undefined && item.messageCount > 0 && (
            <MessageBadge count={item.messageCount} />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.lineSeparator} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'center',
  },
  messageText: {
    marginTop: 5,
  },
  imgStyle: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    height: STORY_SIZE,
    width: STORY_SIZE,
    borderRadius: STORY_SIZE,
    borderWidth: 4,
    borderColor: colors.white,
  },
  timeView: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE,
    marginTop: heightPixel(5),
    backgroundColor: colors.primary,
  },
  lineSeparator: {
    borderTopWidth: 1,
    borderTopColor: colors.borderGrey,
    marginVertical: heightPixel(12),
  },
});

export default memo(MessageCard);
