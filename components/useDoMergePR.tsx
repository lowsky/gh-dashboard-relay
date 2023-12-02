import { getAuthorizedGitHub, MergePullRequestsResponseDataType } from 'restinpeace/github';
import { singleArgOrDefault } from './singleArgOrDefault';

export const useDoMergePR: ({
    userName,
    repoName,
}: {
    userName: string;
    repoName: string;
}) => (num: number) => Promise<unknown> = ({ userName, repoName }) => {
    const doMergePR: (num: number) => (Promise<MergePullRequestsResponseDataType | undefined>) = async (num: number): Promise<MergePullRequestsResponseDataType | undefined> => {
        if (repoName && userName) {
            return await getAuthorizedGitHub().mergePullRequest({
                owner: singleArgOrDefault(userName, ''),
                repo: singleArgOrDefault(repoName, ''),
                pull_number: num,
            });
        }
        return;
    };
    return doMergePR;
};
