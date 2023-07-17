import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Main } from 'components/Layout/Layout.styled';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
