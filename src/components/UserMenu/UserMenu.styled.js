import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 479.9px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
`;
export const UserTitle = styled.p`
  margin: 0;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const LogOutButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  padding: 4px 6px;
  background-color: #c7c5f45e;
  border-radius: 26px;
  border: 1px solid #a5a2ebe3;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;

  transition: 0.2s;

  &:hover,
  &:focus {
    border-color: #6a679e;
    outline: none;
    color: #5c5696;
  }

  @media (min-width: 1200px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`;
