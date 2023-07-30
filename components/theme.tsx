import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

/*
More background about theming:
https://chakra-ui.com/docs/styled-system/theming/theme
https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-component-styles
 */
const themeConfig = {
    config,
    components: {
        Link: (props: Record<string, any> | StyleFunctionProps) => ({
            baseStyle: {
                fontSize: 'md',
                fontWeight: 400,
                color: mode('#2069e0', '#5290f4')(props),
            },
        }),
        Heading: {
            baseStyle: {
                fontWeight: 600,
                marginBottom: '0.5em',
                marginTop: '0.5em',
                color: 'grey.600',
            },
            variants: {
                grey: { color: '#999' },
            },
        },
    }
    //})
    ,
    styles: {
        global: (props: Record<string, any> | StyleFunctionProps) => ({
            a: {
                color: mode('#2069e0', '#5290f4')(props),
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }),
    },
};

export const customTheme = extendTheme({...themeConfig})
