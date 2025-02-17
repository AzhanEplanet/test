import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, navigate, screens} from '../../utilities';
import useSignUpController from '../../controllers/AuthControllers/SignUp';
import {heightPixel, widthPixel} from '../../utilities/helpers';
import {
  CustomText,
  HeadingComp,
  CustomButton,
  PhoneTextInput,
  CustomTextInput,
  CustomScrollView,
  AnimatedCheckbox,
} from '../../components';

const Signup = () => {
  const {values, functions} = useSignUpController();

  return (
    <CustomScrollView scroll showBackground>
      <HeadingComp
        layout="first"
        title="Hello there,"
        subTitle="Register Yourself"
      />

      <Formik
        initialValues={values.initialValues}
        validationSchema={values.schema}
        onSubmit={functions.handleSignUp}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values: data,
          errors,
          touched,
        }) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomTextInput
                returnKeyType="next"
                placeholder="First name"
                containerStyle={{
                  width: widthPixel(159),
                  height: heightPixel(50),
                }}
                onChangeText={handleChange('firstName')}
                value={data.firstName}
                onBlur={handleBlur('firstName')}
                errors={errors.firstName}
                focus={touched.firstName}
              />

              <CustomTextInput
                returnKeyType="next"
                placeholder="Last name"
                containerStyle={{
                  width: widthPixel(159),
                  height: heightPixel(50),
                }}
                onChangeText={handleChange('lastName')}
                value={data.lastName}
                errors={errors.lastName}
                focus={touched.lastName}
              />
            </View>

            <CustomTextInput
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              value={data.email}
              errors={errors.email}
              focus={touched.email}
            />

            <PhoneTextInput
              placeholder="Enter your phone"
              value={data.phone}
              setValue={handleChange('phone')}
              errors={errors.phone}
              focus={touched.phone}
            />

            <CustomTextInput
              passwordField
              placeholder="Enter your password"
              returnKeyType="next"
              onChangeText={handleChange('password')}
              value={data.password}
              errors={errors.password}
              focus={touched.password}
            />

            <CustomTextInput
              passwordField
              placeholder="Enter password again"
              value={data.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              errors={errors.confirmPassword}
              focus={touched.confirmPassword}
            />

            <AnimatedCheckbox
              size={16}
              checked={values.check}
              checkMarkColor={colors.white}
              onValueChange={functions.toggle}
              checkedBackgroundColor={colors.highlightedTxt}
              checkboxContainerStyle={{padding: 0, marginRight: 8}}
              containerStyle={styles.animatedCheckBoxContainer}
              labelStyle={{color: colors.black}}
              label={
                <View style={{alignItems: 'flex-start'}}>
                  <CustomText fontSize={12}>
                    Agree to Buy and Sell
                    <CustomText
                      fontSize={12}
                      weight="medium"
                      color={colors.black}
                      onPress={() => navigate(screens.termsAndConditions)}>
                      {` Terms & Conditions`}
                    </CustomText>
                    {' & '}
                    <CustomText
                      fontSize={12}
                      weight="medium"
                      color={colors.black}
                      onPress={() => navigate(screens.privacyPolicy)}>
                      {`Privacy Policy`}
                    </CustomText>
                  </CustomText>
                </View>
              }
            />

            <CustomButton
              gradient
              title="Signup"
              btnStyle={styles.btnStyle}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <CustomText
        style={styles.bottomText}
        color={colors.black}
        weight="semibold"
        fontSize={12}>
        Already a member?
        <CustomText
          color={colors.highlightedTxt}
          weight="semibold"
          fontSize={12}
          onPress={() => functions.navigateToScreen(screens.login)}>
          {` Login`}
        </CustomText>
      </CustomText>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
    marginTop: heightPixel(25),
    marginBottom: heightPixel(32),
    marginHorizontal: widthPixel(16),
  },
  animatedCheckBoxContainer: {
    marginHorizontal: 5,
    marginTop: heightPixel(28),
  },
  btnStyle: {marginTop: heightPixel(28)},
  containerStyle: {
    marginTop: heightPixel(80),
  },
});

export default Signup;
