import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';

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
        Link: (props: StyleFunctionProps) => ({
            baseStyle: {
                color: mode('#2069e0', '#5290f4')(props),
            },
        }),
        Heading: {
            baseStyle: (props: StyleFunctionProps) => ({
                fontWeight: 'semibold',
                marginBottom: '0.5em',
                marginTop: '0.5em',
                color: mode('var(--chakra-colors-gray-700)', 'var(--chakra-colors-gray-400)')(props),
            }),
            variants: {
                grey: (props: StyleFunctionProps) => ({
                    color: mode('var(--chakra-colors-gray-600)', 'var(--chakra-colors-gray-400)')(props),
                }),
            },
        },
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            a: {
                color: mode('#2069e0', '#5290f4')(props),
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }),
    },
};

export const customTheme = extendTheme({ ...themeConfig });
