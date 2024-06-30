'use server'; // we are using cookies, only use on server side!

import { ReactNode } from 'react';
import { cookies } from 'next/headers';

interface Props {
    children: ReactNode;
}

const WhenSignedIn = async (props: Props) => {
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
    return <p>No valid GitHub access-token! Please, sign-in !</p>;
};

export default WhenSignedIn;
