import { Phonebook } from 'pages/Phonebook/Phonebook';
import * as SC from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <SC.NavContainer>
      <SC.StyledNavLink to="/" end>
        Home
      </SC.StyledNavLink>
      {isLoggedIn && (
        <SC.StyledNavLink to="/phonebook" element={<Phonebook />}>
          Phonebook
        </SC.StyledNavLink>
      )}
    </SC.NavContainer>
  );
};
