import { Field, Formik } from 'formik';
import {
  StyledForm,
  FormContainer,
  StyledErrorMessage,
  StyledFormButton,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address'
    )
    .required('Required'),
  password: yup
    .string()
    .min(8, 'minimum 8 characters ')
    .max(20, 'max 20 characters')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const onSubmit = (data, action) => {
    dispatch(loginUser(data));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <FormContainer>
          <div>
            <label htmlFor={emailInputId}>Email</label>
            <Field
              id={emailInputId}
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <StyledErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor={passwordInputId}>Password</label>
            <Field
              id={passwordInputId}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <StyledErrorMessage name="password" component="div" />
          </div>

          <StyledFormButton type="submit">Login</StyledFormButton>
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
