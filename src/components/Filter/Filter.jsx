import React from 'react';

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

export default FilterInput;
