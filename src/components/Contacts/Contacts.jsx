import React, { useEffect } from 'react';
import {
  StyledContacts,
  StyledContactsItem,
  StyledContactsNumber,
  StyledDeleteButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations-mockapi';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader';

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
      {isLoading && !error && <Loader />}
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <div>
            <StyledContactsItem>{name}</StyledContactsItem>
            <StyledContactsNumber>{phone}</StyledContactsNumber>
          </div>
          <StyledDeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledDeleteButton>
        </li>
      ))}
    </StyledContacts>
  );
};

export default Contacts;
