import { RouterContext } from 'next/dist/shared/lib/router-context';

import '../pages/main.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
};
