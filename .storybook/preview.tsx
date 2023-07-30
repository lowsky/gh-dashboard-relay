import { RouterContext } from 'next/dist/shared/lib/router-context';

import { customTheme } from 'components/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    chakra: {
        theme: customTheme,
    },
};
