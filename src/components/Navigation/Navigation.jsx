import {
  NavWrapper,
  NavContainer,
  NavBlock,
  NavLinkStyled,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavBlock>
          <NavLinkStyled to="/">home</NavLinkStyled>
          <NavLinkStyled to="/contacts">contacts</NavLinkStyled>
        </NavBlock>
        <NavBlock>
          <NavLinkStyled to="/login">login</NavLinkStyled>
          <NavLinkStyled to="/register">register</NavLinkStyled>
        </NavBlock>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navigation;
