import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Adding the config

const config: ThemeConfig = {
    initialColorMode: 'dark',
}

const theme = extendTheme({config});

export default theme