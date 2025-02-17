import {ViewProps} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utilities';

interface GradientViewProps extends ViewProps {
  children: React.ReactNode;
}

const GradientView: FC<GradientViewProps> = ({children, ...props}) => {
  return (
    <LinearGradient
      colors={[colors.primary2, colors.primary]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 0.8, y: 0.5}}
      {...props}>
      {children}
    </LinearGradient>
  );
};

export default GradientView;
