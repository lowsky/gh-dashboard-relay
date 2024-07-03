import { NextApiRequest, NextApiResponse } from 'next';

export default function login(_req: NextApiRequest, res: NextApiResponse) {
    const gh_oauth_app_url =
        // env variable: NEXT_PUBLIC_VERCEL_URL: the public, production url.
        (process.env.VERCEL_ENV === 'production'
            ? // if set in vercel's env
              process.env.NEXT_GH_OAUTH_URL ?? // env variable: NEXT_PUBLIC_VERCEL_URL: the public, production url.
              process.env.NEXT_PUBLIC_VERCEL_URL
            : // The domain name of the generated Git branch URL. Example: *-git-*.vercel.app.
              // The value does not include the protocol scheme https://.
              process.env.VERCEL_BRANCH_URL) ?? 'http://localhost:3000';

    const original_url = _req.query['original_url'] as string | undefined;
    const redirect_uri_base = gh_oauth_app_url?.startsWith('http')
        ? gh_oauth_app_url
        : `https://${gh_oauth_app_url}/api/auth/callback`;
    const redirect_uri = redirect_uri_base + '?original_url=' + encodeURIComponent(original_url ?? '');

    // env variable: GitHub client id for authentication
    // for dev: https://github.com/settings/applications/2618861
    // for prod: https://github.com/settings/applications/2296539
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GH_BASIC_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=repo&extra=true`;

    if (gh_oauth_app_url) {
        res.redirect(githubAuthUrl);
    } else {
        console.error('Sorry, redirect-url-base on cannot be undefined, please check env: NEXT_PUBLIC_VERCEL_URL');
    }
}
