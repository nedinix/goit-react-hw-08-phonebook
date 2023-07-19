import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import { LogoutButton, UserInfo, UserMenuBlock } from './UserMenu.styled';
import { toast } from 'react-hot-toast';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => toast('You are logged out'))
      .catch(() => toast.error('Log out error. Try again, please'));
  };

  return (
    <UserMenuBlock>
      <UserInfo>Welcome, {user}</UserInfo>
      <LogoutButton type="button" onClick={handleLogOut}>
        Logout
      </LogoutButton>
    </UserMenuBlock>
  );
};
