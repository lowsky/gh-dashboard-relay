import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon, Link, Td, Tr } from '@chakra-ui/react';

import UILibContext, { UILib } from '../components/UILibContext';
import { GithubBranch } from '../lib/types/resolvers';
// @ts-ignore
import PullRequestInfo from '../relay/PullRequestInfo';
import { DoMergePR } from './UserRepo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface BranchInfoRowProps {
    branch: GithubBranch;
    doMergePR?: DoMergePR;
}

// @ts-ignore
const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch, doMergePR }) => {
    // @ts-ignore
    const { name, lastCommit } = branch ?? {};
    // @ts-ignore
    const { associatedPullRequests } = lastCommit ?? {};
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;
    // @ts-ignore
    const { CommitWithStatuses, PullRequestInfo } = useContext<UILib>(UILibContext);

    return (
        <Tr key={name}>
            <Td>
                {name && (
                    <Link href={githubBranchSrc} rel="noopener noreferrer nofollow" isExternal>
                        {name ?? '-'}
                    </Link>
                )}
                <Icon>
                    <FontAwesomeIcon icon={faGithub as IconProp} />
                </Icon>
            </Td>
            <Td>
                {associatedPullRequests
                    ?.filter?.(Boolean)
                    .map?.((pr, idx) => pr && <PullRequestInfo key={idx} pullRequest={pr} doMergePR={doMergePR} />)}
            </Td>

            <Td>{lastCommit && <CommitWithStatuses commit={lastCommit} />}</Td>
        </Tr>
    );
};

export default BranchInfoRow;
