'use client';

import { Provider } from 'components/ui/provider';

//import { customTheme } from 'components/theme';

export default function ChakraUIWrapper({ children }) {
    return <Provider>{children}</Provider>;
}
