import React, { useLayoutEffect } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomText, PostComponent, StatusComponent } from '../../components';
import { IStatusRenderItem } from '../../interface';
import {
  colors,
  icons,
  navigate,
  screens,
  statusData,
  utility,
} from '../../utilities';
import { heightPixel, widthPixel } from '../../utilities/helpers';

export default function Home({navigation}: any) {
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <View
            style={[
              styles.headerContainer,
              {paddingTop: utility.isPlatformIOS ? insets.top : heightPixel(8)},
            ]}>
            <View>
              <CustomText fontSize={26} weight="bold">
                Vital Archive
              </CustomText>
              <CustomText fontSize={14}>News Feeds</CustomText>
            </View>
            <View style={styles.headerRightContainer}>
              <TouchableOpacity activeOpacity={0.8}>
                <Image source={icons.add} style={styles.addImage} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate(screens.messages)}>
                <View style={styles.dot} />
                <Image source={icons.chat} style={styles.chatIcon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.dot} />
                <Image
                  source={icons.notification}
                  style={styles.notificationIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      },
    });
  }, []);

  const renderStatusItem = ({item}: IStatusRenderItem) => (
    <StatusComponent item={item} />
  );

  const statusList = () => {
    return (
      <>
        <View style={styles.statusListContainer}>
          <FlatList
            horizontal
            data={statusData}
            renderItem={renderStatusItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: widthPixel(15),
            }}
            keyExtractor={({id}) => (id + Math.random() + DataView.toString()).toString()}
          />
        </View>
        <View style={styles.seprator} />
      </>
    );
  };

  const renderPost = ({item}: IStatusRenderItem) => (
    <PostComponent item={item} />
  );

  return (
    <>
      <View style={styles.mainContainer}>
        <FlatList
          data={statusData}
          ListHeaderComponent={statusList}
          renderItem={renderPost}
          showsVerticalScrollIndicator={false}
          keyExtractor={({id}) => (id + Math.random() + DataView.toString()).toString()}
          contentContainerStyle={{
            paddingBottom: heightPixel(20),
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 0,
    paddingTop: heightPixel(10),
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(16),
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

  seprator: {
    width: Dimensions.get('window').width,
    height: heightPixel(1),
    backgroundColor: colors.whiteSmoke,
    marginTop: heightPixel(13),
  },
});
