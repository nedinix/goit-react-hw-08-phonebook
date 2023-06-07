import styled from '@emotion/styled';

export const StyledContacts = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    margin-bottom: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }

  button {
    display: block;
    height: 28px;

    color: rgb(99, 99, 99);

    border: 1px solid rgb(198, 198, 198);
    border-radius: 4px;

    transition: box-shadow 150ms linear, background-color 10s0ms linear,
      color 100ms linear;
  }

  button:hover,
  button:focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  button:active {
    background-color: rgb(59, 59, 59);
    color: rgb(248, 248, 248);
  }
`;

export const StyledContactsItem = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 8px;
  color: rgb(59, 59, 59);
`;

export const StyledContactsNumber = styled.span`
  color: rgb(236, 104, 42);
`;
