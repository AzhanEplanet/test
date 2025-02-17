import {Dimensions, Platform, StatusBar} from 'react-native';
import {heightPixel} from './helpers';
import {generalImages} from './images';

export const deviceType = Platform.OS;
export const StatusBarHeight = StatusBar.currentHeight;
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const colors = {
  primary: '#E33319',
  primary2: '#CC01FF',
  secondary: '#101010',
  backgroundColor: '#FCFCFC',
  white: '#ffffff',
  whitish: '#f2f2f2',
  halfWhite: '#f5f5f5',
  socialbtnColor: '#F3F3F3',
  black: '#000000',
  blackShade: '#1D1F34',
  gray: '#565656',
  greishBg: '#EBEBEB',
  iconGrey: '#AAAAAA',
  whiteSmoke: 'rgba(239, 239, 239, 1)',
  greish: '#929292',
  borderGrey: '#E8E8E8',
  textGrey: '#71717A',
  label: '#B2B2B2',
  danger: '#FF5757',
  success: '#3AAA1E',
  transparent: 'transparent',
  tabBarBackground: '#93939373',
  fbColor: '#3C5A8D',
  highlightedTxt: '#E33319',
  lightGray: '#F1F1F1',
  scanIcon: '#C0C0C0',
  bottomTab: '#EAEAEA',
};

export const appStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginTop: {
    marginTop: deviceType == 'ios' ? heightPixel(10) : 0,
  },
  bottombtnContainer: {
    paddingHorizontal: 20,
    paddingBottom: deviceType == 'ios' ? heightPixel(30) : heightPixel(20),
  },
  lineSeparator: {
    borderTopWidth: 1,
    marginVertical: 12,
    borderTopColor: colors.borderGrey,
  },
  wrapContainer: {
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: colors.greish,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
};

export const fontFamily = {
  regular: 'Gilroy-Regular',
  medium: 'Gilroy-Medium',
  semibold: 'Gilroy-Semibold',
  bold: 'Gilroy-Bold',
};

export const screens = {
  authStack: 'AuthStack',
  mainStack: 'MainStack',
  bottomTabs: 'BottomTabs',
  echo: 'Echo',
  echoTab: 'EchoTab',
  login: 'Login',
  signup: 'Signup',
  forgotPass: 'ForgotPassword',
  resetPass: 'ResetPassword',
  changePass: 'ChangePassword',
  feed: 'Feed',
  more: 'More',
  home: 'Home',
  explore: 'Explore',
  memories: 'Memories',
  profile: 'Profile',
  myProfile: 'MyProfile',
  otherProfile: 'OtherProfile',
  editProfile: 'EditProfile',
  editPost: 'EditPost',
  postDetail: 'PostDetail',
  notifications: 'Notifications',
  faqs: 'FAQs',
  privacyPolicy: 'PrivacyPolicy',
  termsAndConditions: 'Terms&Conditions',
  settings: 'Settings',
  contactUs: 'ContactUs',
  orders: 'Orders',
  favorites: 'Favorites',
  otpVerification: 'OtpVerification',
  orderHistory: 'OrderHistory',
  createTab: 'CreateTab',
  inbox: 'Inbox',
  chat: 'Chat',
  listings: 'Listings',
  myBookings: 'MyBookings',
  customerSupport: 'CustomerSupport',
  myEarnings: 'MyEarnings',
  dispute: 'Dispute',
  search: 'Search',
  filteredItems: 'FilteredItems',
  rentedEquipment: 'RentedEquipment',
  createListing: 'CreateListing',
  editListing: 'EditListing',
  viewDetail: 'ViewDetail',
  bookNow: 'BookNow',
  bookingReceived: 'BookingReceived',
  bookingRequested: 'BookingRequested',
  viewMapLocation: 'ViewMapLocation',
  uploadPhotos: 'UploadPhotos',
  writeReview: 'WriteReview',
  reviews: 'Reviews',
  rentedDetails: 'RentedDetails',
  returnEquipment: 'ReturnEquipment',
  CompleteProfile: 'CompleteProfile',
  messages: 'Messages',
};

export const api_urls = {
  base_url: '',
  service_token: '',

  // api's end points
  user: 'user',
  login: 'user/login',
  logout: 'user/logout',
  sociaLogin: 'user/social-login',
  forgotPassword: 'user/forgot-password',
  changePassword: 'user/change-password',
};

export const onBoardingDATA = [
  {
    id: '1',
    title:
      'Give people the power to build community and bring the world closer together.',
    image: generalImages.onBoarding,
    buttonLabel: 'Next',
  },
  {
    id: '2',
    title:
      'You can share your Memories, & Stories with your Friends & can Likes, Comments & Save',
    image: generalImages.onBoarding2,
    buttonLabel: 'Next',
  },
  {
    id: '3',
    title:
      'Create, watch, and share short, entertaining videos, Memories & Reels',
    image: generalImages.onBoarding3,
    buttonLabel: "Let's Share Memories",
  },
];
