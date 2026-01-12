'use server'; // we are using cookies, only use on server side!

import type { ReactNode } from 'react';
import { cookies } from 'next/headers';

interface Props {
    children: ReactNode;
}

const WhenNotAuthenticated = async (props: Props) => {
    const access_token = (await cookies()).getAll('access_token') ?? [];
    const hasAccessToken = access_token.length > 0;
    return <>{!hasAccessToken && props.children}</>;
};

export default WhenNotAuthenticated;
