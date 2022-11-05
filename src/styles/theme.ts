import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('white', 'brand.900')(props),
      color: mode('black', 'white')(props),
    },
  }),
};

const customTheme = extendTheme(
  {
    styles,
    config,
  },
  //withDefaultColorScheme({ colorScheme: "brand" })
);

export default customTheme;
