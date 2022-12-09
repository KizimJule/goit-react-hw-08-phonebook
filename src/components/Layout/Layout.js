import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as SC from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Section>
          <SC.HeaderTitle>Hi, I’m your phonebook</SC.HeaderTitle>
          {/* <SC.Nav>
            <SC.StyledLink to="/" end>
              Home
            </SC.StyledLink>
            <SC.StyledLink to="/movies">Movies</SC.StyledLink>
          </SC.Nav> */}
        </SC.Section>
      </SC.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <SC.Footer>
        <SC.Text>&copy; 2022 | Julia K.</SC.Text>
      </SC.Footer>
    </SC.Container>
  );
};
