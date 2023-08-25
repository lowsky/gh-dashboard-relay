import { DoMergePR, getAuthorizedGitHub } from 'restinpeace/github';
import { singleArgOrDefault } from './singleArgOrDefault';

export const useDoMergePR = ({ userName, repoName }) => {
    const doMergePR: DoMergePR = async (num) => {
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
