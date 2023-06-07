import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContacts,
  StyledContactsItem,
  StyledContactsNumber,
} from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => (
  <StyledContacts>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <StyledContactsItem>
          {name}: <StyledContactsNumber>{number}</StyledContactsNumber>
        </StyledContactsItem>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </StyledContacts>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
