'use server';
import { MergePullRequestsResponseDataType } from 'restinpeace/github';
import { authorizedGH } from 'lib/authorizedGH';

export default async function doMergePRAction(
    num: number,
    userName: string,
    repoName: string,
    sha: string
): Promise<MergePullRequestsResponseDataType> {
    if (repoName && userName) {
        return (await authorizedGH()).mergePullRequest({
            owner: userName,
            repo: repoName,
            merge_method: 'rebase',
            pull_number: num,
            sha,
        });
    }
    throw new Error('repo name and owner name are required');
}
