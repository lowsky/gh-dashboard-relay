import { createSystem, defineConfig, defaultConfig, SystemConfig, defineRecipe } from '@chakra-ui/react';

const headingRecipe = defineRecipe({
    base: {
        color: 'grey.700',
        fontWeight: 'semibold',
    },
    variants: {
        grey: {
            true: {
                color: 'grey.200',
            },
        },
    },
});

const config: SystemConfig = defineConfig({
    theme: {
        recipes: {
            heading: headingRecipe,
        },
    },
    globalCss: {
        body: {
            colorPalette: 'blue',
        },
        a: {
            color: '#102FAF',
            //dark mode: 5890ec ?
        },
    },
});

export const system = createSystem(defaultConfig, config);
