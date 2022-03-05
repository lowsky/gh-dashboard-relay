import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon, Link, Td, Tr } from '@chakra-ui/react';

import UILibContext, { UILib } from '../components/UILibContext';
import { GithubBranch } from '../lib/types/resolvers';
import { DoMergePR } from './UserRepo';

export interface BranchInfoRowProps {
    branch: GithubBranch;
    doMergePR?: DoMergePR;
}

const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch, doMergePR }) => {
    const { name, lastCommit } = branch ?? {};
    const { associatedPullRequests } = lastCommit ?? {};
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    const { CommitWithStatuses, PullRequestInfo } = useContext<UILib>(UILibContext);

    return (
        <Tr key={name}>
            <Td>
                {name && (
                    <Link href={githubBranchSrc} rel="noopener noreferrer nofollow" isExternal>
                        {name ?? '-'}
                    </Link>
                )}
                <Icon ml={1}>
                    <FontAwesomeIcon icon={faGithub as IconProp} />
                </Icon>
            </Td>
            <Td>
                {associatedPullRequests?.filter?.(Boolean).map((pr, idx) => (
                    <PullRequestInfo key={idx} pullRequest={pr!} doMergePR={doMergePR} />
                ))}
            </Td>

            <Td>{lastCommit && <CommitWithStatuses commit={lastCommit} />}</Td>
        </Tr>
    );
};

export default BranchInfoRow;
