import {
  HStack,
  Tooltip,
  IconButton,
  useColorMode,
  Center,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { HiSun, HiMoon } from 'react-icons/hi';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<HiMoon />, <HiSun />);
  const themeTooltipText = useColorModeValue(
    'Toggle to Dark',
    'Toggle to Light',
  );

  return (
    <HStack h="16" w="full" py={8} justifyContent="space-between">
      <Heading>Tic Tac Toe Game</Heading>
      <Tooltip label={themeTooltipText} placement="bottom">
        <IconButton
          icon={<Center>{themeIcon}</Center>}
          variant="unstyled"
          aria-label="icon theme mode"
          onClick={toggleColorMode}
          size="sm"
        />
      </Tooltip>
    </HStack>
  );
};

export default Header;
