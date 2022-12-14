import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageDetails = styled.div`
  h1 {
    color: #fff;
    font-size: 2rem;
  }

  h2 {
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    opacity: 0.9;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
`;
