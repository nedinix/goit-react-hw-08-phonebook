import React from 'react';

const Contacts = ({ contacts }) => {
  console.log('contacts', contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        console.log(id, name, number);
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
