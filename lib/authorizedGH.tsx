'use server';
import { cookies } from 'next/headers';
import { Octokit } from '@octokit/rest';

import { AuthorizedGitHub, getAuthorizedGitHub } from 'restinpeace/github';

export async function authorizedGH(): Promise<AuthorizedGitHub> {
    const access_token = cookies().get('access_token')?.value;
    const octo = new Octokit({
        auth: access_token,
    });
    return getAuthorizedGitHub(octo);
}
