import FilterInput from 'components/Filter';
import Contacts from 'components/Contacts';
import { Header, ListContainer } from './ContactsList.styled';

const ContactsList = () => (
  <ListContainer>
    <Header>Contacts</Header>
    <FilterInput />
    <Contacts />
  </ListContainer>
);

export default ContactsList;
