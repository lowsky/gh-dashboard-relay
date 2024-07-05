import { NextApiRequest, NextApiResponse } from 'next';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query.code as string;
    const client_id = process.env.GH_BASIC_CLIENT_ID;
    const client_secret = process.env.GH_BASIC_SECRET_ID;
    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id,
                client_secret,
                code,
            }),
        });
        const tokenData = await tokenResponse.json();
        const { access_token } = tokenData;
        if (access_token) {
            res.setHeader('Set-Cookie', `access_token=${access_token}; HttpOnly; Path=/`);
        }
        const original_url = req.query.original_url as string;
        res.redirect(original_url ?? '/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during OAuth callback');
    }
}
