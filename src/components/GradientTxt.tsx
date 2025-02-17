import {View, Text} from 'react-native';
import React, {FC} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomText from './CustomText';

import {IGradientTxt} from '../interface';
import GradientView from './GradientView';

const GradientTxt: FC<IGradientTxt> = ({
  txt,
  fontSize = 16,
  weight = 'medium',
}) => {
  return (
    <MaskedView
      maskElement={
        <CustomText
          style={{backgroundColor: 'transparent'}}
          fontSize={fontSize}
          weight={weight}>
          {txt}
        </CustomText>
      }>
      <GradientView>
        <CustomText fontSize={fontSize} weight={weight} style={{opacity: 0}}>
          {txt}
        </CustomText>
      </GradientView>
    </MaskedView>
  );
};

export default GradientTxt;
