import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;

  @media (min-width: 480px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 14px;
  color: #034f84;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
