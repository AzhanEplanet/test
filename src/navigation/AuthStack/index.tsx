import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../../utilities';
import {BackButton} from '../../components';
import {
  ForgotPassword,
  Login,
  OnBoarding,
  OtpVerification,
  ResetPassword,
  Signup,
} from '../../screens';

const screenOptions = {
  statusBarStyle: 'dark',
  statusBarColor: colors.white,
  animation: 'slide_from_right',
  headerTitleAlign: 'center',
  headerTitle: '',
  headerShadowVisible: false,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.white,
    shadowColor: colors.transparent,
  },
  headerLeft: () => {
    return <BackButton />;
  },
};
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerLeft: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
