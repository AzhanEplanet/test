import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {colors} from '../utilities';
import {IStatusRenderItem} from '../interface';
import {heightPixel, widthPixel} from '../utilities/helpers';
import GradientView from './GradientView';

const StatusComponent = ({item}: IStatusRenderItem) => {
  return (
    <TouchableOpacity style={styles.statusContainer} activeOpacity={0.9}>
      <Pressable style={styles.statusUser}>
        <Image source={item?.user} style={styles.statusUser} />
      </Pressable>
      <GradientView style={styles.status}>
        <Image source={item?.status} style={styles.statusImage} />
      </GradientView>
      <CustomText
        fontSize={10}
        color={colors.black}
        weight="medium"
        style={styles.statusName}>
        {item?.name}
      </CustomText>
    </TouchableOpacity>
  );
};

export default StatusComponent;
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
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: colors.primary2,
  },
  statusImage: {
    height: '95%',
    width: '90%',
    borderTopRightRadius: widthPixel(30),
    borderBottomRightRadius: widthPixel(27),
    borderTopLeftRadius: widthPixel(30),
    borderBottomLeftRadius: widthPixel(27),
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
