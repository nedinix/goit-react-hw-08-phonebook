import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  background-color: rgb(245, 245, 245);
  border-bottom: 1px solid rgb(27, 31, 35);
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 20px;
  font-weight: 600;
  color: rgb(27, 31, 35);
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    color: rgb(32, 99, 187);
  }

  &.active {
    border-bottom: 4px solid rgb(235, 104, 18);
    color: rgb(235, 104, 18);
  }
`;

export const NavBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav`
  max-width: 680px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;
