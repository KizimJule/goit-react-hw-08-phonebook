import { NavLink } from 'react-router-dom';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import * as SC from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <SC.NavContainer>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/phonebook" element={<Phonebook />}>
          Phonebook
        </NavLink>
      )}
    </SC.NavContainer>
  );
};
