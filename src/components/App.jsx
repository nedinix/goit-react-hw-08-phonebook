import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';

const App = () => {
  return (
    // <Container>
    //   <div>
    //     <h3>Phonebook</h3>
    //     <Form />
    //   </div>
    //   <div>
    //     <h3>Contacts</h3>
    //     <FilterInput />
    //     <Contacts />
    //   </div>
    // </Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/register" element={<></>}></Route>
        <Route path="/login" element={<></>}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
