import Form from './Form/Form';
import Contacts from './Contacts';
import FilterInput from './Filter';
import { Container } from './App.styled';

const App = () => (
  <Container>
    <div>
      <h3>Phonebook</h3>
      <Form />
    </div>
    <div>
      <h3>Contacts</h3>
      <FilterInput />
      <Contacts />
    </div>
  </Container>
);

export default App;
