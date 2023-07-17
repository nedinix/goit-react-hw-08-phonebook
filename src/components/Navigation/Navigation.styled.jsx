import styled from '@emotion/styled';

export const NavWrapper = styled.div`
  background-color: rgb(27, 175, 201);

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  & a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: rgb(241, 241, 241);
  }

  & a:not(:last-child) {
    margin-right: 12px;
  }
`;

export const NavMenu = styled.div`
  /* display: block;
  margin-left: auto;
  margin-right: auto; */
`;

export const NavContainer = styled.nav`
  max-width: 680px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;
