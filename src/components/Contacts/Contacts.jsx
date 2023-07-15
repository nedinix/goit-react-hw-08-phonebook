import React, { useEffect } from 'react';
import {
  StyledContacts,
  StyledContactsItem,
  StyledContactsNumber,
  StyledDeleteButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact, fetchContacts } from 'redux/operations-mockapi';
import {
  selectIsLoading,
  // selectContacts,
  // selectFilter,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = visibleContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContacts>
      {isLoading && !error && <Loader />}
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <StyledContactsItem>
            {name}: <StyledContactsNumber>{phone}</StyledContactsNumber>
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
