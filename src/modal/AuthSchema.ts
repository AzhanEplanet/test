import * as Yup from 'yup';

export const AuthSchema = {
  LoginSchema: Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),
  SignupSchema: Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone is required'),
  }),
  CompleteProfileSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    bio: Yup.string().required('Bio is required'),
    location: Yup.string().required('Location is required'),
    career: Yup.string().required('Career is required'),
    education: Yup.string().required('Education is required'),
    language: Yup.string().required('Language is required'),
  }),
};

export const authInitialvalues = {
  Login: {
    email: 'james@mailinator.com',
    password: 'Admin@123',
  },
  Signup: {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  CompleteProfile: {
    username: '',
    bio: '',
    location: '',
    career: '',
    education: '',
    language: '',
  },
};
