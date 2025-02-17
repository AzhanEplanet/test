import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPixel, widthPixel} from '../../utilities/helpers';
import useLoginController from '../../controllers/AuthControllers/Login';
import {colors, images, screens, utility} from '../../utilities';
import {
  CustomText,
  HeadingComp,
  CustomButton,
  CustomTextInput,
  CustomScrollView,
  IconButton,
} from '../../components';

const socialBtn = [
  {
    id: 1,
    icon: images.googleLogo,
    onPress: () => console.log('Here'),
  },
  {
    id: 2,
    icon: images.appleLogo,
    onPress: () => console.log('Here'),
  },
  {
    id: 3,
    icon: images.facebookLogo,
    onPress: () => console.log('Here'),
  },
];

const Login = () => {
  const {values, functions} = useLoginController();

  return (
    <CustomScrollView
      scroll
      showBackground
      contentContainerStyle={{
        paddingBottom: heightPixel(40),
      }}>
      <HeadingComp
        layout="first"
        title="Hello there,"
        subTitle="Welcome Back"
        containerStyle={styles.containerStyle}
      />

      <Formik
        initialValues={values.initialValues}
        validationSchema={values.schema}
        onSubmit={functions.handleSignIn}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values: data,
          errors,
          touched,
        }) => (
          <>
            <CustomTextInput
              placeholder="Email Address"
              returnKeyType="next"
              value={data.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              errors={errors.email}
              focus={touched.email}
            />

            <CustomTextInput
              passwordField
              placeholder="Password"
              value={data.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              focus={touched.password}
              errors={errors.password}
            />

            <CustomText
              color={colors.secondary}
              style={styles.forgotPasswordStyle}
              fontSize={13}
              onPress={() => functions.navigateToScreen(screens.forgotPass)}>
              Forgot Password?
            </CustomText>

            <CustomButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={styles.separatorView}>
        <View style={styles.separatorLine} />
        <CustomText
          color={colors.black}
          weight="medium"
          style={{marginHorizontal: 10}}>
          Or continue with
        </CustomText>
        <View style={styles.separatorLine} />
      </View>
      <View style={styles.row}>
        {socialBtn?.map(res => (
          <IconButton
            key={res.id}
            icon={res.icon}
            onPress={res.onPress}
            size={25}
            iconStyle={styles.iconStyle}
          />
        ))}
      </View>
      <CustomText
        color={colors.gray}
        weight="medium"
        fontSize={12}
        style={styles.bottomText}>
        Continue with Google, Apple or Facebook, you agree to Love Apple Digest{' '}
        <CustomText color={colors.black} fontSize={12} weight="semibold">
          {`Terms and Conditions`}
        </CustomText>
        {' & '}
        <CustomText fontSize={12} weight="semibold" color={colors.black}>
          {`Privacy Policy`}
        </CustomText>
      </CustomText>

      <CustomText
        style={styles.bottomText}
        color={colors.black}
        weight="semibold"
        fontSize={12}>
        Don’t have account?{' '}
        <CustomText
          color={colors.highlightedTxt}
          weight="semibold"
          fontSize={12}
          onPress={() => functions.navigateToScreen(screens.signup)}>
          {`Register`}
        </CustomText>
      </CustomText>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  separatorView: {
    marginTop: heightPixel(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorLine: {
    width: widthPixel(67),
    borderTopWidth: 1,
    borderTopColor: colors.greish,
  },
  socialBtnView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialBtn: {
    backgroundColor: colors.black,
    marginTop: heightPixel(24),
  },
  googleBtn: {
    backgroundColor: colors.greishBg,
    marginTop: heightPixel(14),
  },
  fbBtn: {
    backgroundColor: colors.fbColor,
    marginTop: heightPixel(14),
  },
  bottomText: {
    textAlign: 'center',
    marginTop: heightPixel(25),
    marginHorizontal: widthPixel(32),
  },
  containerStyle: {
    marginTop: heightPixel(utility.isPlatformIOS ? 80 : 30),
  },
  forgotPasswordStyle: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  iconStyle: {
    height: heightPixel(60),
    width: widthPixel(70),
    backgroundColor: colors.socialbtnColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPixel(300),
    alignSelf: 'center',
    marginTop: heightPixel(32),
  },
});

export default Login;
