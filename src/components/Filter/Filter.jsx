import React from 'react';
import { StyledFilterInput } from './Filter.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const validationSchema = yup.object().shape({
  filter: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Enter name may contain only letters, apostrophe, dash and spaces.'
    ),
});

const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Formik inititalValue={filter} validationSchema={validationSchema}>
      <StyledFilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </Formik>
  );
};

export default FilterInput;
