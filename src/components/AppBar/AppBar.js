import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';

import * as SC from './AppBar.styled';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <SC.Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </SC.Header>
  );
};
