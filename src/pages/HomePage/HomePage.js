import * as SC from './Homepage.styled';

import { NavLink } from 'react-router-dom';

export function HomePage() {
  return (
    <SC.ContainerMain>
      <SC.HomeTitle>
        Hi, I’m your phonebook.
        <p>
          To save or view your contacts press{' '}
          <span>
            <NavLink to="/register">Register</NavLink>
          </span>
          <span>or</span>
          <span>
            <NavLink to="/login">LogIn</NavLink>
          </span>
        </p>
      </SC.HomeTitle>
    </SC.ContainerMain>
  );
}
