import { ReactNode } from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getCurrentEnvironment } from './relay';

export default function RelayClientContext({ auth, children }: { auth: string; children: ReactNode }) {
    const environment = getCurrentEnvironment(auth);

    /*
    Type error: Type 'React.ReactNode' is not assignable to type 'import("/Users/hostlows/github/relay-gh-cockpit/node_modules/@types/react-relay/node_modules/@types/react/index").ReactNode'.
  Type 'ReactElement<unknown, string | JSXElementConstructor<any>>' is not assignable to type 'ReactNode'.
    Property 'children' is missing in type 'ReactElement<unknown, string | JSXElementConstructor<any>>' but required in type 'ReactPortal'.
     */
    return (
        <RelayEnvironmentProvider environment={environment}>
            <>{children}</>
        </RelayEnvironmentProvider>
    );
}
