import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 14px;
`;
export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: #034f84;
  cursor: pointer;

  :hover,
  :focus {
    color: #7a3b2e;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
