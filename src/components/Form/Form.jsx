import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  StyledFormPhonebook,
  StyledFormPhonebookButton,
  StyledErrorMessage,
} from './Form.styled';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

const Form = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const onSubmit = (data, action) => {
    const { name } = data;
    const contactExist = contacts
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    if (contactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <StyledFormPhonebook>
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
          <label htmlFor={numberInputId}>Number</label>
          <Field
            id={numberInputId}
            type="tel"
            name="number"
            placeholder="Enter phone number"
          />
          <StyledErrorMessage name="number" component="div" />
        </div>

        <StyledFormPhonebookButton type="submit">
          Add Contact
        </StyledFormPhonebookButton>
      </StyledFormPhonebook>
    </Formik>
  );
};

Form.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Form;
