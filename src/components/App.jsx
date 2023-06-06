import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(
      prevState => (prevState.contacts = [...prevState.contacts, data])
    );

    console.log('onSubmit', this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);

    return (
      <div>
        <div>
          <h3>Phonebook</h3>
          <Form onSubmitForm={this.formSubmitHandler} />
        </div>
        <div>
          <h3>Contacts</h3>
          {contacts.length > 0 && <Contacts contacts={contacts} />}
        </div>
      </div>
    );
  }
}

export default App;
