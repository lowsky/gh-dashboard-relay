import { Provider } from 'components/ui/provider';
import { ReactNode } from 'react';

export default function ChakraUIWrapper({ children }: { children: ReactNode }) {
    return <Provider defaultTheme="dark">{children}</Provider>;
}
