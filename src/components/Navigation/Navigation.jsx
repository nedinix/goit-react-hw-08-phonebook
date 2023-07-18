import { useAuth } from 'hooks';
import {
  NavWrapper,
  NavContainer,
  NavBlock,
  NavLinkStyled,
} from './Navigation.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

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
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavContainer>
    </NavWrapper>
  );
};

export default Navigation;
