import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {colors} from '../../utilities';
import {
  CustomText,
  HeadingComp,
  CustomButton,
  CustomTextInput,
  CustomScrollView,
} from '../../components';
import {heightPixel} from '../../utilities/helpers';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(12, 'Password must be at least 12 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one symbol')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
};

export default function ResetPassword({route}: any) {
  const email = route?.params?.email;

  const handleSubmit = (values: {
    password: string;
    confirmPassword: string;
  }) => {
    console.log('Form submitted:', values);
    // Handle password reset logic here
  };

  return (
    <CustomScrollView
      scroll
      contentContainerStyle={{
        paddingTop: heightPixel(20),
      }}>
      <HeadingComp
        title="Set New Password"
        subTitle="Please enter your new password"
        titleTxtSize={26}
        subTitleTxtSize={14}
        titleTxtColor={colors.black}
        subTitleTxtColor={colors.gray}
        titletxtWeight="semibold"
        subTitleTxtWeight="regular"
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              marginTop: heightPixel(36),
            }}>
            <CustomTextInput
              passwordField
              label="Set New Password"
              placeholder="New Password"
              returnKeyType="next"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errors={errors.password}
              focus={touched.password}
            />

            <CustomTextInput
              passwordField
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              errors={errors.confirmPassword}
              focus={touched.confirmPassword}
            />

            <View style={styles.instructionsView}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.dotStyle} />
                <CustomText fontSize={12} color={colors.gray}>
                  At least 12 characters long but 14 or more is better.
                </CustomText>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.dotStyle} />
                <CustomText fontSize={12} color={colors.gray}>
                  A combination of uppercase letters, lowercase letters,
                  numbers, and symbols.
                </CustomText>
              </View>
            </View>

            <CustomButton
              gradient
              title="Continue"
              btnStyle={{marginTop: 45}}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    height: 3,
    width: 3,
    borderRadius: 3,
    marginRight: 10,
    marginTop: 6,
    backgroundColor: colors.black,
  },
  instructionsView: {
    marginTop: 35,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
