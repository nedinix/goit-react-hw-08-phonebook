import React, { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState(prevState => {
      prevState.contacts.push(data);
      console.log(prevState);
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Phonebook</h3>
          <Form onSubmitForm={this.formSubmitHandler} />
        </div>
        <div>
          <h3>Contacts</h3>
        </div>
      </div>
    );
  }
}

export default App;
