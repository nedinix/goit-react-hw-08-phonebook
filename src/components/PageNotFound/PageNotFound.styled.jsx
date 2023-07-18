import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;

  strong {
    color: rgba(235, 104, 18, 0.5);
    font-size: 10rem;
  }

  p {
    font-weight: 500;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: rgb(32, 99, 187);
  margin-bottom: 2rem;
`;

export const MessageText = styled.p`
  max-width: 500px;
  margin-bottom: 4rem;
`;

export const ButtonBackHome = styled(Link)`
  background-color: rgb(59, 59, 59);
  border: 1px solid rgb(59, 59, 59);
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: all 100ms linear;

  &:hover {
    background-color: rgb(235, 104, 18);
    border-color: rgb(235, 104, 18);
    color: #fff;
  }
`;
