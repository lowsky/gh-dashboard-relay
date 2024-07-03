'use server';

import { cookies } from 'next/headers';

export async function deleteAuthCookie() {
    cookies().delete('access_token');
}
