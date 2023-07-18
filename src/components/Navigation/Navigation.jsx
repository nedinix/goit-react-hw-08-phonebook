import { useAuth } from 'hooks';
import {
  NavWrapper,
  NavContainer,
  NavBlock,
  NavLinkStyled,
} from './Navigation.styled';
import AuthNav from 'components/AuthNav/AuthNav';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log('isLoggedIn', isLoggedIn);
  return (
    <NavWrapper>
      <NavContainer>
        <NavBlock>
          <NavLinkStyled to="/">home</NavLinkStyled>
          {isLoggedIn && <NavLinkStyled to="/contacts">contacts</NavLinkStyled>}
        </NavBlock>

        {/* <NavLinkStyled to="/login">login</NavLinkStyled>
          <NavLinkStyled to="/register">register</NavLinkStyled> */}
        <AuthNav />
      </NavContainer>
    </NavWrapper>
  );
};

export default Navigation;
