import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import FilterInput from './Filter/Filter';

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
    this.setState(
      prevState => (prevState.contacts = [...prevState.contacts, data])
    );

    console.log('onSubmit', this.state.contacts);
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);

    return (
      <div>
        <div>
          <h3>Phonebook</h3>
          <Form onSubmitForm={this.formSubmitHandler} />
        </div>
        <div>
          <h3>Contacts</h3>
          <FilterInput value={filter} onChange={this.handleFilterChange} />
          {contacts.length > 0 && <Contacts contacts={contacts} />}
        </div>
      </div>
    );
  }
}

export default App;
