import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/Layout/Layout.styled';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </Container>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
