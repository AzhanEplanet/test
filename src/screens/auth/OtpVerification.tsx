import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  CustomButton,
  CustomScrollView,
  CustomText,
  HeadingComp,
} from '../../components';
import useOTPControllers from '../../controllers/AuthControllers/OTPControllers';
import {colors} from '../../utilities';
import {heightPixel, widthPixel} from '../../utilities/helpers';

const CELL_COUNT = 6;

export default function OtpVerification({route}: any) {
  const {values, functions} = useOTPControllers();

  const [value, setValue] = useState('');
  const [timer, setTimer] = useState('60');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CustomScrollView>
      <HeadingComp
        title="OTP Verification"
        subTitle={`Please enter 6-digit code we have sent you on your phone `}
        titleTxtSize={26}
        highlitedText={'+123 456789'}
        subTitleTxtSize={14}
        titleTxtColor={colors.black}
        subTitleTxtColor={colors.gray}
        titletxtWeight="semibold"
        subTitleTxtWeight="regular"
        subTitleStyle={styles.subTitleStyle}
        containerStyle={styles.containerStyle}
      />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.rootStyle}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.codeFieldStyle, isFocused && styles.focusCellStyle]}>
            <CustomText onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : '-')}
            </CustomText>
          </View>
        )}
      />
      <CustomButton
        title={`Resend in 00:48`}
        btnStyle={styles.resendBtn}
        txtColor={colors.black}
        txtSize={12}
        onPress={() => console.log('Resend Code')}
      />
      <CustomButton
        title="Continue"
        gradient
        btnStyle={styles.btnStyle}
        onPress={() => functions.handleonSubmit(route.params.forgotPassword)}
      />
    </CustomScrollView>
  );
}
const styles = StyleSheet.create({
  focusCellStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.whiteSmoke,
  },
  subTitleStyle: {
    textAlign: 'center',
    width: widthPixel(256),
  },
  containerStyle: {
    alignItems: 'center',
  },
  codeFieldStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: widthPixel(14),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whitish,
    borderColor: colors.whitish,
  },
  resendBtn: {
    marginTop: heightPixel(49),
    backgroundColor: colors.whiteSmoke,
    width: widthPixel(130),
    alignSelf: 'center',
    borderRadius: widthPixel(26),
  },
  rootStyle: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(77.6),
  },
  btnStyle: {marginTop: heightPixel(62)},
});
