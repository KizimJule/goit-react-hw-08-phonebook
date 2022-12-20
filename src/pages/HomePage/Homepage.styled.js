import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  font-size: 26px;
  margin: 0;
  text-align: center;
  color: #034f84;
  margin-bottom: 12px;

  @media (min-width: 480px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;
export const ContainerMain = styled.main`
  color: #010101;
  padding: 16px;
  height: auto;

  @media (min-width: 480px) {
    padding: 20px;
  }
`;
export const HomeText = styled.p`
  font-size: 19px;
  margin: 0;
  color: #034f84;
  text-align: justify;
  text-indent: 20px;

  @media (min-width: 480px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 28px;
    text-align: center;
    line-height: 1.7;
  }
`;

export const HomeTextNavLink = styled(NavLink)`
  margin: 0 6px;
  font-weight: 600;
  color: #034f84;

  :hover,
  :focus {
    color: #7a3b2e;
  }
`;
