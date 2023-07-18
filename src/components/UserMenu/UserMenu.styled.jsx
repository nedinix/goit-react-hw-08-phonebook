import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

export const UserInfo = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 12px;

  text-align: right;
  font-size: 16px;
  font-weight: 600;
  color: rgb(59, 59, 59);
`;

export const LogoutButton = styled.button`
  display: block;
  height: 28px;
  margin-left: auto;

  color: rgb(241, 241, 241);

  border: 1px solid rgb(59, 59, 59);
  border-radius: 4px;
  background-color: rgb(59, 59, 59);

  transition: box-shadow 150ms linear, background-color 100ms linear,
    color 100ms linear;

  &:hover,
  &:focus {
    color: rgb(241, 241, 241);
    background-color: rgb(235, 104, 18);
    border-color: rgb(235, 104, 18);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &:active {
    background-color: rgb(59, 59, 59);
    color: rgb(248, 248, 248);
  }
`;

export const UserMenuBlock = styled.div`
  display: flex;
  align-items: center;
`;
