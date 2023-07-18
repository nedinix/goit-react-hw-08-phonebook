import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledFilterInput = styled(Field)`
  max-width: 254px;
  width: 100%;
  display: block;
  height: 28px;
  /* margin-right: auto;
  margin-left: auto; */

  padding-left: 4px;

  color: rgb(99, 99, 99);

  outline: 1px solid rgb(198, 198, 198);
  border-radius: 4px;
  border: transparent;

  transition: box-shadow 150ms linear, outline 150ms linear, color 100ms linear;

  &::placeholder {
    color: rgb(99, 99, 99);
  }

  &:hover,
  &:focus {
    outline: 1px solid rgb(99, 99, 99);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
