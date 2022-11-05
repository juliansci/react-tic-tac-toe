import { Stack } from '@chakra-ui/react';

type ContentProps = {
  children: React.ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return (
    <Stack py={8} alignItems="center">
      {children}
    </Stack>
  );
};

export default Content;
