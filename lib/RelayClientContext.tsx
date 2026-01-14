import type { ReactNode } from 'react';
import { useContext } from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getCurrentEnvironment } from './relay';
import type { RelayContext } from 'react-relay';
import { ReactRelayContext } from 'react-relay';

/**
 * If this is already wrapped in a relay context - then re-using it, instead of creating a new env.
 *
 * (This is helpful, to be used in storybook, when relay-specific stories are decorated with a
 * relay-decorator
 */
export default function RelayClientContext({ auth, children }: { auth: string; children: ReactNode }) {
    // Fails with an error while asserting on wrapped by a context
    // const env = useRelayEnvironment();
    // checking manually, as this is only used for overriding in Storybook:
    const context = useContext<RelayContext | null>(ReactRelayContext);
    const environment = context?.environment ?? getCurrentEnvironment(auth);

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
