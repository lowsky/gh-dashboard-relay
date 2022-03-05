import * as React from 'react';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { themeConfig } from '../components/theme';

import { extendTheme } from '@chakra-ui/react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    chakra: {
        theme: extendTheme({ ...themeConfig }),
    },
};
