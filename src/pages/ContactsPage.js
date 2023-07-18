import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
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
        <h2>Phonebook</h2>
        <ContactsForm />
        <ContactsList />
      </>
    </>
  );
};

export default ContactsPage;
