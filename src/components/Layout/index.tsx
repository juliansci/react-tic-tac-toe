import { Container } from '@chakra-ui/react';
import Content from './Content';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW="container.xl" height="100vh" px="8">
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
