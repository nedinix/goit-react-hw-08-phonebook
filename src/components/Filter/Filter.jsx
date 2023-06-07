import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
