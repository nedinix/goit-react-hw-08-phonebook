import { NavContainer, NavMenu, NavWrapper } from './Navigation.styled';

const { NavLink } = require('react-router-dom');

const Navigation = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavMenu>
          <NavLink to="/">home</NavLink>
          <NavLink to="/contacts">contacts</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/register">register</NavLink>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navigation;
