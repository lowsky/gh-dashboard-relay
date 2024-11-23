import { createSystem, defaultConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = {
    /*
    components: {
        Link: {
            baseStyle: (props: StyleFunctionProps) => ({
                color: mode('#102FAF', '#5890ec')(props),
            }),
        },
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
    */
    /*
    styles: {
        global: (props: StyleFunctionProps) => ({
            a: {
                color: mode('#102FAF', '#5890ec')(props),
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }),
    },

     */
};

//export const customTheme = extendTheme({ ...themeConfig });
export const system = createSystem(defaultConfig, {
    theme,
});
