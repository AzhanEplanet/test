import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {heightPixel, widthPixel} from '../../utilities/helpers';
import {
  appStyles,
  colors,
  dummyImages,
  exploreDATA,
  icons,
} from '../../utilities';
import {
  CustomText,
  CustomTabs,
  GradientTxt,
  GradientView,
  CustomButton,
  CustomScrollView,
} from '../../components';

const connections = [
  {id: 1, name: 'Posts', count: '845'},
  {id: 2, name: 'Followers', count: '15.7k'},
  {id: 3, name: 'Following', count: '256'},
];

const renderScene = ({route}: {route: {key: string}}) => {
  switch (route.key) {
    case 'media':
      return <View />;
    case 'memories':
      return <View />;
    case 'autobiography':
      return <View />;
    default:
      return null;
  }
};

export default function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const [routes] = useState([
    {key: 'media', title: 'Media', icon: icons.mediaTabIcon},
    {key: 'memories', title: 'Memories', icon: icons.memoriesTabIcon},
    {
      key: 'autobiography',
      title: 'Autobiography',
      icon: icons.biographyTabIcon,
    },
  ]);

  return (
    <CustomScrollView>
      <>
        <View style={[styles.userInfoContainer, styles.rowContainer]}>
          <View style={styles.profileBtn}>
            <Image
              source={dummyImages.profileImage}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
              <Image source={icons.editIcon} style={{height: 20, width: 20}} />
            </TouchableOpacity>
          </View>

          <View style={styles.userConnectionInfo}>
            {connections.map((res, index) => (
              <View
                key={(res?.id + index).toString()}
                style={styles.userConnectionInfoItem}>
                <CustomText
                  fontSize={12}
                  color={colors.black}
                  weight="semibold">
                  {res?.count}
                </CustomText>
                <CustomText fontSize={10} color={colors.gray}>
                  {res?.name}
                </CustomText>
              </View>
            ))}
          </View>

          <CustomButton
            onPress={() => console.log('Here')}
            title="152"
            subTitle="Mutuals"
            txtSize={12}
            subTitleTxtSize={10}
            gradient
            btnStyle={{
              height: heightPixel(46),
              width: widthPixel(59),
              marginTop: 0,
              borderRadius: widthPixel(8),
            }}
          />
        </View>

        <CustomText
          fontSize={13}
          color={colors.black}
          weight="bold"
          style={styles.nameStyle}>
          Emerson Bator
        </CustomText>

        <CustomText
          fontSize={12}
          color={colors.black}
          weight="medium"
          style={styles.nameStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry 😁🔥🔥.
        </CustomText>

        <View style={styles.rowContainer}>
          <GradientView style={styles.gradientBtn}>
            <TouchableOpacity
              style={styles.gradientInnerBtn}
              activeOpacity={0.8}>
              <GradientTxt txt="Make a Friend" fontSize={12} />
            </TouchableOpacity>
          </GradientView>

          <CustomButton
            title="Message"
            txtSize={12}
            onPress={() => console.log('Here')}
            btnStyle={[styles.gradientBtn, styles.btn]}
          />
        </View>
      </>

      <TabView
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        navigationState={{index: tabIndex, routes}}
        renderTabBar={props => (
          <CustomTabs
            {...props}
            titleSize={10}
            selectedTab={tabIndex}
            onChangeTab={setTabIndex}
            // containerStyle={{marginHorizontal: 20}}
          />
        )}
      />
      <ScrollView
        style={[appStyles.container, {flexGrow: 1}]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ListContainer}>
          {exploreDATA.map((res, index) => {
            return (
              <View
                style={styles.imageContainer}
                key={(index + Math.random()).toString()}>
                <Image
                  source={res.uri}
                  style={{
                    width: widthPixel(111),
                    height: heightPixel(110),
                  }}
                  resizeMode="cover"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    height: heightPixel(60),
    marginBottom: heightPixel(8),
  },
  ListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: widthPixel(6),
    rowGap: widthPixel(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPixel(10),
    flex: 1,
  },
  imageContainer: {
    borderRadius: heightPixel(8),
    overflow: 'hidden',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: heightPixel(60),
    width: heightPixel(60),
    borderRadius: heightPixel(60 * 2) / 2,
    resizeMode: 'cover',
  },
  editBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    height: heightPixel(20),
    width: heightPixel(20),
    borderRadius: heightPixel(20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userConnectionInfo: {
    height: heightPixel(46),
    width: widthPixel(192),
    backgroundColor: colors.lightGray,
    paddingVertical: heightPixel(7),
    paddingHorizontal: widthPixel(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: widthPixel(8),
  },
  userConnectionInfoItem: {
    alignItems: 'center',
  },
  nameStyle: {
    marginTop: heightPixel(5),
  },
  gradientBtn: {
    height: heightPixel(39),
    width: widthPixel(167),
    borderRadius: widthPixel(8),
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: heightPixel(15),
  },
  gradientInnerBtn: {
    height: '90%',
    width: '98%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: heightPixel(7),
  },
  btn: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
});
