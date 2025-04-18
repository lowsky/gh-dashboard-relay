'use client';

import { Provider } from 'components/ui/provider';

export default function ChakraUIWrapper({ children }) {
    return <Provider>{children}</Provider>;
}
