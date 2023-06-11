import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterInput } from './Filter.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  filter: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Enter name may contain only letters, apostrophe, dash and spaces.'
    ),
});

const FilterInput = ({ value, onChange }) => {
  return (
    <Formik inititalValue={{ value }} validationSchema={validationSchema}>
      <StyledFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </Formik>
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
