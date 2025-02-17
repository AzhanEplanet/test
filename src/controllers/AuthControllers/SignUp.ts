import useToggle from '../../hooks/useToggle';
import {authInitialvalues, AuthSchema} from '../../modal';
import { navigate, screens } from '../../utilities';

const useSignUpController = () => {
  const [check, setCheck, toggle] = useToggle();

    const handleSignUp = async (values: {
      email: string;
      password: string
    }) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      navigate(screens.otpVerification)
    };
    const navigateToScreen = (name: string) =>{
      navigate(name)
    }
  
    return {
      values: {
       schema: AuthSchema.SignupSchema,
       initialValues: authInitialvalues.Signup,
       check
      },
      functions: {
        handleSignUp,
        navigateToScreen,
        toggle
      },
    };
  };
  
  export default useSignUpController;