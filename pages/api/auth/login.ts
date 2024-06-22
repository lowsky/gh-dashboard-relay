import { NextApiRequest, NextApiResponse } from 'next';

export default function login(_req: NextApiRequest, res: NextApiResponse) {
    const client_id = process.env.GH_BASIC_CLIENT_ID;
    const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/auth/callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;

    res.redirect(githubAuthUrl);
}
