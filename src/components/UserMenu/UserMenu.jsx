import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import { LogoutButton, UserInfo, UserMenuBlock } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuBlock>
      <UserInfo>Welcome, {user}</UserInfo>
      <LogoutButton type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </LogoutButton>
    </UserMenuBlock>
  );
};
