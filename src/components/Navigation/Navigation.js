import { NavLink } from 'react-router-dom';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import * as SC from './Navigation.styled';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <SC.NavContainer>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/phonebook" element={<Phonebook />}>
        Phonebook
      </NavLink>
      {/* {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>} */}
    </SC.NavContainer>
  );
};
