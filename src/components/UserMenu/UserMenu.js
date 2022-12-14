import * as SC from './UserMenu.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <SC.UserMenuContainer>
      <SC.UserTitle>Welcome, {user.name} </SC.UserTitle>
      <SC.LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </SC.LogOutButton>
    </SC.UserMenuContainer>
  );
};
