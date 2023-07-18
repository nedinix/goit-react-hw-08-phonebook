import { Field, Formik } from 'formik';
import {
  StyledForm,
  FormContainer,
  StyledErrorMessage,
  StyledFormButton,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required(),
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
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const onSubmit = (data, action) => {
    console.log(data);
    dispatch(registerUser(data));
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
            <label htmlFor={nameInputId}>Name</label>
            <Field
              id={nameInputId}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <StyledErrorMessage name="name" component="div" />
          </div>
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

          <StyledFormButton type="submit">Register</StyledFormButton>
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
