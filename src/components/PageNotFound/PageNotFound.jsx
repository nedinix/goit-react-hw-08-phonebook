import {
  Message,
  Title,
  MessageText,
  ButtonBackHome,
} from './PageNotFound.styled';

const PageNotFound = () => (
  <Message>
    <strong>404</strong>
    <Title>LOOKS LIKE YOU ARE LOST IN THE SPACE</Title>
    <MessageText>
      The page you are looking for might be removed or is temporally unavailable
    </MessageText>

    <ButtonBackHome to={'/'}>GO BACK HOME</ButtonBackHome>
  </Message>
);

export default PageNotFound;
