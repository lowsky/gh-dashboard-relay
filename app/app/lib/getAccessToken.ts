import { cache } from 'react';
import { cookies } from 'next/headers';

export const getAccessToken: () => Promise<string | undefined> = cache(async () => {
    try {
        const cookieStore = await cookies();
        const access_token = cookieStore.get('access_token')?.value;
        return access_token;
    } catch (error) {
        console.error('Failed to fetch token from cookie store: ', error);
    }
});
