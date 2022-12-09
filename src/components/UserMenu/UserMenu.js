import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <SC.UserMenuContainer>
      <SC.UserTitle>Welcome, </SC.UserTitle>
      {/* <p>Welcome, {user.name}</p> */}
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
      <SC.LogOutButton type="button">Logout</SC.LogOutButton>
    </SC.UserMenuContainer>
  );
};
