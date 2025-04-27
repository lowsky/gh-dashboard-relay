import { Provider } from 'components/ui/provider';

export default function ChakraUIWrapper({ children }) {
    return <Provider defaultTheme="dark">{children}</Provider>;
}
