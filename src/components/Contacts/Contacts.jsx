import React from 'react';

const Contacts = ({ contacts }) => {
  console.log('contacts', contacts);
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        console.log(id, name);
        return (
          <li key={id}>
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
