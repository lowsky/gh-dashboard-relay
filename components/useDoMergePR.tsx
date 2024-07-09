import type { MergePullRequestsResponseDataType } from 'restinpeace/github';

import doMergePRAction from './doMergePRAction';

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
}) => () => Promise<null | MergePullRequestsResponseDataType> =
    ({ userName, repoName, num, sha }) =>
    () => {
        if (repoName && userName && num && sha) {
            return doMergePRAction(num, userName, repoName, sha);
        }
        return Promise.resolve(null);
    };
