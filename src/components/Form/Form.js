import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
  };
  nameInputId = nanoid();

  handleNameChange = e => {
    const { name, id, value } = e.currentTarget;
    this.setState({ [name]: value, id: id });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state);
    this.reset();
    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: '' });
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
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default Form;
