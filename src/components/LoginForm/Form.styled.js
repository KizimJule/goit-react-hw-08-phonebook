import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  /* justify-content: center; */
  /* padding: 20px; */
  font-size: 16px;
  color: #010101;
`;

export const Form = styled.form`
  width: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  gap: 14px;
  background-color: white;
  border: 2px solid rgba(119, 107, 204, 1);
  border-radius: 12px;
`;
export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 4px;
`;
export const InputForm = styled.input`
  height: 20px;
`;
export const InfoSpan = styled.span`
  font-size: 10px;
`;
export const TextLabel = styled.p`
  text-align: start;
  font-size: 12px;
`;
export const ButtonSubmit = styled.button`
  padding: 4px 8px;
  display: inline-block;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  border: 2px solid rgba(119, 107, 204, 1);
  border-radius: 12px;

  :hover {
    background-color: #c7c5f4;
  }
`;
