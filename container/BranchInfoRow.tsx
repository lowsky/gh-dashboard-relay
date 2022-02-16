import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import UILibContext from '../components/UILibContext';
import { GithubBranch } from '../lib/types/resolvers';
import { DoMergePR } from './UserRepo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface BranchInfoRowProps {
    branch: GithubBranch;
    doMergePR?: DoMergePR;
}

const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch, doMergePR }) => {
    const { name, lastCommit } = branch;
    const { associatedPullRequests } = lastCommit ?? {};
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;
    const { CommitWithStatuses, PullRequestInfo } = useContext(UILibContext);

    return (
        <tr key={name}>
            <td>
                <a href={githubBranchSrc} rel="noopener noreferrer nofollow">
                    {name}
                </a>{' '}
                <FontAwesomeIcon icon={faGithub as IconProp} />
            </td>
            <td>
                {associatedPullRequests
                    ?.filter?.(Boolean)
                    .map?.((pr, idx) => pr && <PullRequestInfo key={idx} pullRequest={pr} doMergePR={doMergePR} />)}
            </td>
            <td>{lastCommit && <CommitWithStatuses commit={lastCommit} />}</td>
        </tr>
    );
};

export default BranchInfoRow;
