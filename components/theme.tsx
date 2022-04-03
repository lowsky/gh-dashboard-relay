import { mode } from '@chakra-ui/theme-tools';

/*
More background about theming:
https://chakra-ui.com/docs/styled-system/theming/theme
https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-component-styles
 */
export const themeConfig = {
    components: {
        Link: {
            baseStyle: {
                fontSize: 'md',
                fontWeight: 400,
                color: 'base', // to inherit a-link color
            },
        },
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
    },
    styles: {
        global: (props) => ({
            body: {
                fontFamily: 'body',
                fontWeight: 'normal',
                color: mode('gray.700', 'whiteAlpha.900')(props),
                bg: mode('white', 'gray.800')(props),
                lineHeight: 'base',
            },
            a: {
                color: mode('#3273dc', 'blue.200')(props),
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }),
    },
};
