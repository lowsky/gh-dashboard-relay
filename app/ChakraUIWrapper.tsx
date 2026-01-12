import type { ReactNode } from 'react';

import { Provider } from 'components/ui/provider';

export default function ChakraUIWrapper({ children }: { children: ReactNode }) {
    return <Provider defaultTheme="dark">{children}</Provider>;
}
