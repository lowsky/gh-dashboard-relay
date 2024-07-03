import { NextApiRequest, NextApiResponse } from 'next';

export default function login(_req: NextApiRequest, res: NextApiResponse) {
    const {
        // The domain name of the generated Git branch URL. Example: *-git-*.vercel.app. The value does not include the protocol scheme https://.
        VERCEL_BRANCH_URL,
        // env variable: NEXT_PUBLIC_VERCEL_URL: the public, production url.
        NEXT_PUBLIC_VERCEL_URL,
        // env variable: VERCEL_ENV: production, preview or development.
        VERCEL_ENV,
        // env variable: GitHub client id for authentication
        // for dev: https://github.com/settings/applications/2618861
        // for prod: https://github.com/settings/applications/2296539
        GH_BASIC_CLIENT_ID,
    } = process.env;

    const gh_oauth_app_url =
        (VERCEL_ENV === 'production' ? NEXT_PUBLIC_VERCEL_URL : VERCEL_BRANCH_URL) ??
        'http://localhost:3000/api/auth/callback';

    const original_url = _req.query['original_url'] as string | undefined;
    const redirect_uri_base = gh_oauth_app_url?.startsWith('http')
        ? gh_oauth_app_url
        : `https://${gh_oauth_app_url}/api/auth/callback`;
    const redirect_uri = redirect_uri_base + '?original_url=' + encodeURIComponent(original_url ?? '');

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GH_BASIC_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=repo&extra=true`;

    if (gh_oauth_app_url) {
        res.redirect(githubAuthUrl);
    } else {
        console.error('Sorry, redirect-url-base on cannot be undefined, please check env: NEXT_PUBLIC_VERCEL_URL');
    }
}
