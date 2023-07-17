import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from 'components/Form';
import ContactList from 'components/ContactsList/ContactList';
import { Loader } from 'components/Loader';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <>
        <Form />

        <ContactList />
      </>
    </>
  );
};

export default ContactsPage;
