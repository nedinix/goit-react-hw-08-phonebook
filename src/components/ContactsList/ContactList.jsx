import FilterInput from 'components/Filter';
import Contacts from 'components/Contacts';
import { ListContainer } from './ContactList.styled';

const ContactList = () => (
  <ListContainer>
    <h3>Contacts</h3>
    <FilterInput />
    <Contacts />
  </ListContainer>
);

export default ContactList;
