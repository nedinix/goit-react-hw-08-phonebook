import { toast } from 'react-hot-toast';
import {
  StyledContacts,
  ContactsItem,
  ContactsNumber,
  DeleteButton,
  ContactWrapper,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
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

  const handleDelete = id =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(r => toast(`Successfully deleted contact: ${r.name}`))
      .catch(() => toast.error('Error. Something wrong.'));

  return (
    <StyledContacts>
      {isLoading && !error && <p>Loading...</p>}
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactWrapper>
            <ContactsItem>{name}:</ContactsItem>
            <ContactsNumber>{number}</ContactsNumber>
          </ContactWrapper>
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </li>
      ))}
    </StyledContacts>
  );
};

export default Contacts;
