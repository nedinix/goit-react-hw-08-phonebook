import React from 'react';
import { nanoid } from 'nanoid';
import {
  StyledFormPhonebookButton,
  StyledErrorMessage,
  FormContainer,
  FieldWrapper,
} from './ContactsForm.styled';
import { Field, Formik, Form } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

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

const ContactsForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (data, action) => {
    const { name } = data;

    console.log(data);

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
      <Form>
        <FormContainer>
          <FieldWrapper>
            <label htmlFor={nameInputId}>Name</label>
            <Field
              id={nameInputId}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <StyledErrorMessage name="name" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <label htmlFor={numberInputId}>Number</label>
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              placeholder="Enter phone number"
            />
            <StyledErrorMessage name="number" component="div" />
          </FieldWrapper>
        </FormContainer>
        <StyledFormPhonebookButton type="submit">
          Add Contact
        </StyledFormPhonebookButton>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
