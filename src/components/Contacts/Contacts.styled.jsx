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
`;

export const DeleteButton = styled.button`
  display: block;
  height: 28px;

  color: rgba(99, 99, 99, 0.5);

  background-color: rgba(240, 240, 240, 0.3);
  border: 1px solid rgba(198, 198, 198, 0.3);
  border-radius: 4px;

  transition: box-shadow 150ms linear, background-color 100ms linear,
    color 100ms linear;

  &:hover,
  &:focus {
    color: rgb(240, 240, 240);

    background-color: rgb(159, 159, 159);
    border-color: rgb(159, 159, 159);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:active {
    background-color: rgb(59, 59, 59);
    color: rgb(248, 248, 248);
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
`;

export const ContactsItem = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 8px;
  font-weight: 600;
  color: rgb(59, 59, 59);
  margin-right: 12px;
`;

export const ContactsNumber = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  color: rgb(42, 104, 176);
`;

export const ContactsName = styled.p`
  color: rgb(59, 59, 59);
`;
