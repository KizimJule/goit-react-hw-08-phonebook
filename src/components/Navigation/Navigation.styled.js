import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 479.9px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  &.active {
    color: #c83349;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #7a3b2e;
  }

  @media (min-width: 480px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
