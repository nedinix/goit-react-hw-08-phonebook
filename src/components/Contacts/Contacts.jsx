import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContacts,
  StyledContactsItem,
  StyledContactsNumber,
  StyledDeleteButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  // const deleteContact = contactId => {
  //   dispatch(deleteContact(contacts.filter(({ id }) => id !== contactId)));
  // };

  return (
    <StyledContacts>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <StyledContactsItem>
            {name}: <StyledContactsNumber>{number}</StyledContactsNumber>
          </StyledContactsItem>
          <StyledDeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledDeleteButton>
        </li>
      ))}
    </StyledContacts>
  );
};

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
