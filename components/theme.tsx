import type { SystemConfig } from '@chakra-ui/react';
import { createSystem, defineConfig, defaultConfig, defineRecipe } from '@chakra-ui/react';

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
    },
});

export const system = createSystem(defaultConfig, config);
