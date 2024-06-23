'use server'; // we are using cookies, only use on server side!

import { ReactNode } from 'react';
import { cookies } from 'next/headers';

interface Props {
    children: ReactNode;
}

const WhenSignedIn = (props: Props) => {
    const access_token = cookies().getAll('access_token') ?? [];
    const hasAccessToken = access_token.length > 0;
    if (hasAccessToken) {
        const cookie = access_token[0];
        return (
            <>
                <p>Name: {cookie.name}</p>
                <p>Value: {cookie.value}</p>
                {props.children}
            </>
        );
    }
    return <p>Has no valid accessToken !</p>;
};

export default WhenSignedIn;
