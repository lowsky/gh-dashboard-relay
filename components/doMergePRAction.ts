'use server';
import { Octokit } from '@octokit/rest';
import { cookies } from 'next/headers';

import { getAuthorizedGitHub, MergePullRequestsResponseDataType } from 'restinpeace/github';

export default async function doMergePRAction(
    num: number,
    userName: string,
    repoName: string,
    sha: string
): Promise<MergePullRequestsResponseDataType | null> {
    const access_token = cookies().get('access_token')?.value;
    const octo = new Octokit({
        auth: access_token,
    });
    if (repoName && userName) {
        return getAuthorizedGitHub(octo).mergePullRequest({
            owner: userName,
            repo: repoName,
            merge_method: 'rebase',
            pull_number: num,
            sha,
        });
    }
    return null;
}
