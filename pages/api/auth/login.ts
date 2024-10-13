import { NextApiRequest, NextApiResponse } from 'next';

export default function login(_req: NextApiRequest, res: NextApiResponse) {
    const gh_oauth_app_url =
        // env variable: NEXT_PUBLIC_VERCEL_URL: the public, production url.
        (process.env.VERCEL_ENV === 'production'
            ? // if set in Vercel env
              (process.env.NEXT_GH_OAUTH_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL)
            : // The domain name of the generated Git branch URL. Example: *-git-*.vercel.app.
              // The value does not include the protocol scheme https://.
              // this will be checked and added below, if it is needed.
              process.env.VERCEL_BRANCH_URL) ?? 'localhost:3000';

    console.log('diagnosis:');
    console.log('VERCEL_ENV', process.env.VERCEL_ENV);
    console.log('NEXT_GH_OAUTH_URL', process.env.NEXT_GH_OAUTH_URL);
    console.log('NEXT_PUBLIC_VERCEL_URL', process.env.NEXT_PUBLIC_VERCEL_URL);
    console.log('VERCEL_BRANCH_URL', process.env.VERCEL_BRANCH_URL);

    const original_url = _req.query.original_url ?? '';
    const redirect_uri_base = gh_oauth_app_url?.startsWith('http')
        ? gh_oauth_app_url
        : `https://${gh_oauth_app_url}/api/auth/callback`;
    const redirect_uri = redirect_uri_base + encodeURIComponent('?original_url=' + original_url);

    console.log({ gh_oauth_app_url });
    console.log({ redirect_uri_base });
    console.log({ redirect_uri });

    // env variable: GitHub client id for authentication
    // for dev: https://github.com/settings/applications/2618861
    // for prod: https://github.com/settings/applications/2296539
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GH_BASIC_CLIENT_ID}&scope=repo&redirect_uri=${redirect_uri}`;

    console.log({ githubAuthUrl });

    res.redirect(githubAuthUrl);
}
