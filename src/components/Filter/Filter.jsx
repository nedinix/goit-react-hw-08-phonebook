import React from 'react';
import { StyledFilterInput } from './Filter.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filter-slice';

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
  const filter = useSelector(selectFilter);

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
