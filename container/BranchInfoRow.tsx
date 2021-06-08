import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import UILibContext from '../components/UILibContext';
import { GithubBranch } from "../lib/types/resolvers";
import PullRequestInfo from '../relay/PullRequestInfo';

export interface BranchInfoRowProps {
  branch: GithubBranch;
}

const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch }) => {
    const { name, lastCommit = {} } = branch;
    const { associatedPullRequests } = lastCommit;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;
    const { CommitWithStatuses } = useContext(UILibContext);

    return (
        <tr key={name}>
            <td>
                <a href={githubBranchSrc}>{name}</a> <FontAwesomeIcon icon={faGithub} />
            </td>
            <td>
                {associatedPullRequests?.map?.((pr, idx) => (
                    <PullRequestInfo key={idx} pullRequest={pr} />
                ))}
            </td>
            <td>
                <CommitWithStatuses commit={lastCommit} />
            </td>
        </tr>
    );
};

export default BranchInfoRow;
