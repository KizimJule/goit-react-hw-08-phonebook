import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as SC from './Layout.styled';
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <SC.Container>
      <AppBar />
     
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <SC.Footer>
        <SC.Text>&copy; 2022 | Julia K.</SC.Text>
      </SC.Footer>
    </SC.Container>
  );
};
