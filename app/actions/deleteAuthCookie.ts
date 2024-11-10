'use server';

import { cookies } from 'next/headers';

export async function deleteAuthCookie() {
    (await cookies()).delete('access_token');
}
