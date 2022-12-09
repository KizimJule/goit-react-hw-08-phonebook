import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  border: 0.5px solid black;
  border-radius: 4px;
  background-color: #fff;
  padding: 1px 6px;
  font-size: 12px;
  color: #000;
`;
