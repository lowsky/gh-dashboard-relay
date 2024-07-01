import { NextApiRequest } from 'next';

export function getAccessToken(req: NextApiRequest): string | null {
    const cookies = req.headers.cookie;
    if (!cookies) return null;

    const accessToken = cookies.split(';').find(cookie => cookie.trim().startsWith('access_token='));
    if (!accessToken) return null;

    return accessToken.split('=')[1];
}
