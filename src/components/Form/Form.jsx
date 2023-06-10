import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { StyledFormPhonebook, StyledFormPhonebookButton } from './Form.styled';
import { Field, Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

class Form extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  static propTypes = {
    initialValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  generateId = () => nanoid();

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    this.props.onSubmitForm({ name, number, id: this.generateId() });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <StyledFormPhonebook>
          <div>
            <label htmlFor={this.nameInputId}>Name</label>
            <Field
              id={this.nameInputId}
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </div>
          <div>
            <label htmlFor={this.numberInputId}>Number</label>
            <Field
              id={this.numberInputId}
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </div>

          <StyledFormPhonebookButton type="submit">
            Add Contact
          </StyledFormPhonebookButton>
        </StyledFormPhonebook>
      </Formik>
    );
  }
}

export default Form;
