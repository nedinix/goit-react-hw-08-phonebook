import React, { useEffect, useState } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts';
import FilterInput from './Filter';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

const CONTACTS_LS_DATA = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContactsState = JSON.parse(
      localStorage.getItem(CONTACTS_LS_DATA)
    );
    if (savedContactsState !== null) {
      setContacts(savedContactsState);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem(CONTACTS_LS_DATA, JSON.stringify(contacts));
    }
  }, [contacts]);

  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    const contactExist = contacts
      .map(({ name }) => name.toLowerCase())
      .includes(data.name.toLowerCase());

    if (contactExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, data]);
    action.resetForm();
  };

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <div>
        <h3>Phonebook</h3>
        <Form onSubmit={onSubmitForm} />
      </div>
      <div>
        <h3>Contacts</h3>
        <FilterInput value={filter} onChange={handleFilterChange} />
        {handleFilterChange.length > 0 && (
          <Contacts
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        )}
      </div>
    </Container>
  );
};

export default App;
