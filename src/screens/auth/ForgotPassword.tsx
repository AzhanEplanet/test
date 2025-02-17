import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {heightPixel} from '../../utilities/helpers';
import {colors, deviceHeight, navigate, screens} from '../../utilities';
import {
  HeadingComp,
  CustomButton,
  PhoneTextInput,
  CustomScrollView,
} from '../../components';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
});

const initialValues = {
  phone: '',
};

export default function ForgotPassword() {
  const handleSubmit = (values: any) => {
    navigate(screens.otpVerification, {forgotPassword: true});
  };

  return (
    <CustomScrollView
      scroll
      contentContainerStyle={{
        paddingTop: heightPixel(16),
      }}>
      <HeadingComp
        title="Forgot Password"
        subTitle="In order to reset your password you need to enter your registered phone number."
        titleTxtSize={26}
        subTitleTxtSize={14}
        titleTxtColor={colors.black}
        subTitleTxtColor={colors.gray}
        titletxtWeight="semibold"
        subTitleTxtWeight="regular"
        subTitleStyle={{
          width: '98%',
        }}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={{marginTop: heightPixel(37)}}>
            <PhoneTextInput
              placeholder="Enter your phone"
              value={values.phone}
              setValue={handleChange('phone')}
              errors={errors.phone}
              focus={touched.phone}
            />

            <CustomButton
              gradient
              title="Continue"
              onPress={handleSubmit}
              btnStyle={{
                marginTop: heightPixel(150),
              }}
            />
          </View>
        )}
      </Formik>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // paddingTop: deviceHeight * 0.1,
  },
});
