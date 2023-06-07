import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts';
import FilterInput from './Filter';

class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => {
      const contactExist = contacts
        .map(({ name }) => name.toLowerCase())
        .includes(data.name.toLowerCase());

      if (contactExist) {
        alert(`${data.name} is already in contacts`);
        return { contacts };
      }

      return { contacts: [...contacts, data] };
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="container">
        <div>
          <h3>Phonebook</h3>
          <Form onSubmitForm={this.formSubmitHandler} />
        </div>
        <div>
          <h3>Contacts</h3>
          <FilterInput value={filter} onChange={this.handleFilterChange} />
          {filteredContacts.length > 0 && (
            <Contacts
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
