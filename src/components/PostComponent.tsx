import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {colors, dummyImages, icons, peopleViewed} from '../utilities';
import IconButton from './IconButton';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {IStatusRenderItem} from '../interface';

export default function PostComponent({item}: IStatusRenderItem) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={dummyImages.statusUser} style={styles.userImage} />
        <View style={styles.userInfoContainer}>
          <View style={styles.nameContainer}>
            <CustomText fontSize={14} color={colors.black} weight="bold">
              {item?.name}
            </CustomText>
            <CustomText fontSize={10} color={colors.gray} weight="regular">
              @{item?.name}
            </CustomText>
          </View>
          <TouchableOpacity onPress={() => console.log('Here')}>
            <Image source={icons.menuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={dummyImages.postImage} style={styles.postImage} />
      <View style={styles.actionsContainer}>
        <View style={styles.actionRowContainer}>
          <View style={styles.actions}>
            <IconButton
              icon={icons.like}
              iconStyle={styles.icon}
              onPress={() => console.log('Like')}
            />
            <CustomText fontSize={12} weight="medium">
              50k
            </CustomText>
          </View>
          <View style={styles.actions}>
            <IconButton
              icon={icons.message}
              iconStyle={styles.icon}
              onPress={() => console.log('Like')}
            />
            <CustomText fontSize={12} weight="medium">
              24k
            </CustomText>
          </View>
          <View style={styles.actions}>
            <IconButton
              icon={icons.share}
              iconStyle={styles.icon}
              onPress={() => console.log('Like')}
            />
            <CustomText fontSize={12} weight="medium">
              2k
            </CustomText>
          </View>
        </View>
        <IconButton
          icon={icons.bookmark}
          iconStyle={styles.bookMarkIcon}
          onPress={() => console.log('Like')}
        />
      </View>
      <View
        style={{
          marginTop: heightPixel(12),
          height: heightPixel(37),
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {peopleViewed.map((item, index) => {
            if (peopleViewed.length - 1 === index) {
              return (
                <View
                  style={{
                    height: heightPixel(20),
                    width: heightPixel(20),
                    borderRadius: heightPixel(10),
                    marginLeft: -widthPixel(6),
                    backgroundColor: colors.whiteSmoke,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: colors.white,
                    // elevation:20
                  }}
                  key={(item?.id + index + Math.random()).toString()}>
                  <CustomText
                    fontSize={8}
                    weight="semibold"
                    color={colors.black}>
                    22k
                  </CustomText>
                </View>
              );
            }
            return (
              <Image
                key={(item?.id + index + Math.random()).toString()}
                source={item?.user}
                style={{
                  height: heightPixel(20),
                  width: heightPixel(20),
                  borderRadius: heightPixel(10),
                  marginLeft: index != 0 ? -widthPixel(6) : widthPixel(2),
                  borderWidth: 1,
                  borderColor: '#F5F5F5',
                }}
              />
            );
          })}
        </View>
        <CustomText
          fontSize={9}
          color={colors.blackShade}
          weight="semibold"
          style={styles.viewsText}>
          People Viewed
        </CustomText>
      </View>
      <CustomText fontSize={10} color={colors.black} style={styles.caption}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <CustomText fontSize={10} color={colors.highlightedTxt}>
          {' '}
          #clouds #weather
        </CustomText>
      </CustomText>

      <CustomText
        style={styles.commentbtn}
        fontSize={10}
        weight="medium"
        color={colors.gray}
        underline>
        View all 425 comments
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 0,
    margin: 0,
  },
  headerContainer: {
    height: heightPixel(120),
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(16),
    paddingTop: heightPixel(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(90),
    justifyContent: 'space-between',
  },
  addImage: {
    width: widthPixel(22),
    height: widthPixel(22),
    resizeMode: 'contain',
  },
  chatIcon: {
    width: widthPixel(18),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
  notificationIcon: {
    width: widthPixel(18),
    height: widthPixel(22),
    resizeMode: 'contain',
  },
  dot: {
    position: 'absolute',
    backgroundColor: colors.danger,
    height: heightPixel(10),
    width: widthPixel(10),
    borderRadius: widthPixel(5),
    top: -3,
    right: 0,
    zIndex: 10,
  },
  statusListContainer: {
    marginTop: heightPixel(2),
  },
  statusContainer: {
    height: heightPixel(116),
    width: widthPixel(63),
    // marginHorizontal: widthPixel(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: widthPixel(15),
  },
  status: {
    height: heightPixel(88),
    width: widthPixel(63),
    borderRadius: widthPixel(30),
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: colors.primary2,
  },
  statusUser: {
    height: heightPixel(23),
    width: heightPixel(23),
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: heightPixel(11.5),
    zIndex: 10,
    top: 0,
  },
  statusName: {
    marginTop: heightPixel(5),
  },
  seprator: {
    width: Dimensions.get('window').width,
    height: heightPixel(1),
    backgroundColor: colors.whiteSmoke,
    marginTop: heightPixel(13),
  },
  postContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(15),
  },

  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: widthPixel(10),
  },
  viewsText: {
    marginLeft: widthPixel(4),
  },
  userImage: {
    height: heightPixel(40),
    width: heightPixel(40),
    borderRadius: heightPixel(20),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '86%',
  },
  menuIcon: {
    height: heightPixel(4),
    width: widthPixel(21),
  },
  postImage: {
    height: heightPixel(393),
    width: '100%',
    borderRadius: widthPixel(10),
    resizeMode: 'cover',
    marginVertical: heightPixel(10),
  },
  actionsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(5),
  },
  icon: {
    borderWidth: 0,
    width: widthPixel(16),
    height: widthPixel(16),
    marginRight: widthPixel(4),
  },
  actionRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.38,
    justifyContent: 'space-between',
  },
  actions: {flexDirection: 'row', alignItems: 'center'},
  bookMarkIcon: {
    borderWidth: 0,
    width: widthPixel(17),
    height: widthPixel(17),
    resizeMode: 'cover',
  },
  caption: {
    marginTop: heightPixel(12),
    marginLeft: widthPixel(5),
  },
  commentbtn: {
    marginTop: heightPixel(9),
    marginLeft: widthPixel(5),
  },
});
