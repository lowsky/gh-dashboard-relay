import { NextApiRequest, NextApiResponse } from 'next';

export default function login(_req: NextApiRequest, res: NextApiResponse) {
    const client_id = process.env.GH_BASIC_CLIENT_ID;
    const next_url = process.env.NEXT_PUBLIC_VERCEL_URL;
    const redirect_uri = next_url?.startsWith('http') ? next_url : `https://${next_url}/api/auth/callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;

    console.log('redirecting to ' + githubAuthUrl);

    if (next_url) res.redirect(githubAuthUrl);
    else console.error('Sorry, redirect-url-base on cannot be undefined, please check env: NEXT_PUBLIC_VERCEL_URL');
}
