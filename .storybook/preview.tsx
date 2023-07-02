import { RouterContext } from 'next/dist/shared/lib/router-context';
import { extendTheme } from '@chakra-ui/react';

import { themeConfig } from 'components/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    chakra: {
        theme: extendTheme({ ...themeConfig }),
    },
};
