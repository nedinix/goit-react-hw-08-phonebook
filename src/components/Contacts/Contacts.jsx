import React, { useEffect } from 'react';
import {
  StyledContacts,
  ContactsItem,
  ContactsNumber,
  DeleteButton,
  ContactWrapper,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContacts>
      {isLoading && !error && <p>Loading...</p>}
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactWrapper>
            <ContactsItem>{name}:</ContactsItem>
            <ContactsNumber>{number}</ContactsNumber>
          </ContactWrapper>
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </StyledContacts>
  );
};

export default Contacts;
