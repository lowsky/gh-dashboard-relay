import { customTheme } from 'components/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
        theme: customTheme,
    },
};
