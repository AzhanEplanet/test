import React from 'react';
import {StyleSheet, Dimensions, View, Image, ScrollView} from 'react-native';
import {HorizontalTabs} from '../../components';
import {appStyles, exploreDATA} from '../../utilities';
import {heightPixel, widthPixel} from '../../utilities/helpers';

const {width} = Dimensions.get('window');
const tabs = ['All', 'Trending', 'Popular', 'Food', 'Beach', 'Nature'];

export default function Explore() {
  return (
    <View style={[appStyles.container]}>
      {/* Horizontal Tabs */}
      <View style={{marginVertical: heightPixel(10)}}>
        <HorizontalTabs tabs={tabs} />
      </View>

      {/* Masonry List for Explore Grid */}
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}>
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
        {/* <MasonryList
          images={[
            // Can be used with different image object fieldnames.
            // Ex. source, source.uri, uri, URI, url, URL
            {
              uri: 'https://dummyimage.com/640x4:3/',
            },
            // IMPORTANT: It is REQUIRED for LOCAL IMAGES
            // to include a dimensions field with the
            // actual width and height of the image or
            // it will throw an error.
            // { source: require("yourApp/image.png"),
            //     dimensions: { width: 1080, height: 1920 }
            // },
            // "width" & "height" is an alternative to the dimensions
            // field that will also be acceptable.
            // { source: require("yourApp/image.png"),
            //     width: 1080,
            //     height: 1920 },
            {
              uri: 'https://dummyimage.com/640x4:3/',
            },
            {
              uri: 'https://dummyimage.com/640x4:3/',
              // Optional: Adding a dimensions field with
              // the actual width and height for REMOTE IMAGES
              // will help improve performance.
              dimensions: {width: 1080, height: 1920},
            },
            {
              URI: 'https://dummyimage.com/640x4:3/',
              // Optional: Does not require an id for each
              // image object, but is for best practices.
              id: 'blpccx4cn',
            },
            {
              url: 'https://dummyimage.com/640x4:3/',
            },
            {
              URL: 'https://dummyimage.com/640x4:3/',
            },
            {
              URL: 'https://dummyimage.com/640x4:3/',
              dimensions: {width: 1000, height: 220},
            },
          ]}
          // Version *2.14.0 update
          // onEndReached={() => {
          //     // add more images when scrolls reaches end
          // }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: heightPixel(8),
    overflow: 'hidden',
  },
  imageWrapper: {
    borderRadius: heightPixel(8),
    overflow: 'hidden',
  },
  image: {
    width: (width - widthPixel(40)) / 2, // Dynamic width based on spacing
    height: heightPixel(200), // Fixed height
    borderRadius: heightPixel(8),
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
});
