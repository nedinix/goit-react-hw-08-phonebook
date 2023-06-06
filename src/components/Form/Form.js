import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  generateId = () => nanoid();

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: this.generateId() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          onChange={this.handleNameChange}
          required
        />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Form;
