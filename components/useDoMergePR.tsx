import type { MergePullRequestsResponseDataType } from 'restinpeace/github';

import doMergePRAction from 'app/actions/doMergePRAction';

export const useDoMergePR: ({
    userName,
    repoName,
    num,
    sha,
}: {
    userName: string;
    repoName: string;
    num: number;
    sha: string;
}) => () => Promise<MergePullRequestsResponseDataType> =
    ({ userName, repoName, num, sha }) =>
    () =>
        doMergePRAction(num, userName, repoName, sha);
