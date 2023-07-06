import React, { useEffect, useState } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts';
import FilterInput from './Filter';
import { Container } from './App.styled';

const CONTACTS_LS_DATA = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(CONTACTS_LS_DATA)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(CONTACTS_LS_DATA, JSON.stringify(contacts)),
    [contacts]
  );

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  return (
    <Container>
      <div>
        <h3>Phonebook</h3>
        <Form />
      </div>
      <div>
        <h3>Contacts</h3>
        <FilterInput value={filter} onChange={handleFilterChange} />
        {handleFilterChange.length > 0 && <Contacts />}
      </div>
    </Container>
  );
};

export default App;
