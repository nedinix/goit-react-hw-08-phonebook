import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <h3>Homepage</h3>
      <p>Welcome! {user && <span>{user}</span>} </p>
      {!isLoggedIn ? (
        <p>
          <NavLink to="/register">Register</NavLink> or{' '}
          <NavLink to="/login">Log In</NavLink> for use Phonebook
        </p>
      ) : (
        <p>
          Go to your <NavLink to="/contacts">contacts</NavLink>
        </p>
      )}
    </div>
  );
};

export default HomePage;
