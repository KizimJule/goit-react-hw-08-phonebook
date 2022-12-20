import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 12px 14px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 25%,
    rgba(119, 107, 204, 1) 100%
  );

  @media (min-width: 480px) {
    padding: 12px 20px;
  }
`;
