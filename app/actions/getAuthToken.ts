'use server';
import { cookies } from 'next/headers';

export default async function getAuthToken() {
    const access_token = (await cookies()).get('access_token')?.value;

    return access_token;
}
