import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledFormPhonebook = styled(Form)`
  label {
    color: rgb(99, 99, 99);
    margin-bottom: 4px;
  }

  input {
    max-width: 254px;
    width: 100%;
    display: block;
    height: 28px;

    padding-left: 4px;

    color: rgb(99, 99, 99);

    outline: 1px solid rgb(198, 198, 198);
    border-radius: 4px;
    border: transparent;

    transition: box-shadow 150ms linear, outline 150ms linear,
      color 100ms linear;

    &::placeholder {
      color: rgb(99, 99, 99);
    }

    &:hover,
    &:focus {
      outline: 1px solid rgb(99, 99, 99);
    }

    &:focus {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;

    margin-bottom: 12px;
  }
`;

export const StyledFormPhonebookButton = styled.button`
  display: block;
  height: 28px;
  margin-left: auto;

  color: rgb(99, 99, 99);

  border: 1px solid rgb(198, 198, 198);
  border-radius: 4px;

  transition: box-shadow 150ms linear, background-color 100ms linear,
    color 100ms linear;

  &:hover,
  &:focus {
    background-color: rgb(241, 241, 241);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &:active {
    background-color: rgb(59, 59, 59);
    color: rgb(248, 248, 248);
  }
`;
