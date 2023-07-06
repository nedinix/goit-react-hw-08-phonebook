import React from 'react';
import {
  StyledContacts,
  StyledContactsItem,
  StyledContactsNumber,
  StyledDeleteButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts =
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    ) ?? [];

  return (
    <StyledContacts>
      {filteredContacts.map(({ id, name, number }) => (
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

export default Contacts;
