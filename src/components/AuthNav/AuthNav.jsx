import { NavBlock, NavLinkStyled } from './AuthNav.styled';

const AuthNav = () => (
  <NavBlock>
    <NavLinkStyled to="/register">Register</NavLinkStyled>
    <NavLinkStyled to="/login">Log In</NavLinkStyled>
  </NavBlock>
);

export default AuthNav;
