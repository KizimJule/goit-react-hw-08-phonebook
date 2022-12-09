// import { NavLink } from 'react-router-dom';
import { Register } from '../../pages/Register/Register';
import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SC.AuthNavContainer>
      <SC.AuthNavLink to="/register" element={<Register />}>
        Register
      </SC.AuthNavLink>
      <SC.AuthNavLink to="/login">Log In</SC.AuthNavLink>
    </SC.AuthNavContainer>
  );
};
