import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon, Link, Td, Tr } from '@chakra-ui/react';

import { GithubBranch, Maybe } from '../restinpeace/types';
import { Spinner } from '../components/Spinner';
import { useUILib } from '../components/UILibContext';
import { DoMergePR } from '../restinpeace/github';

export interface BranchInfoRowProps {
    branch: GithubBranch;
    doMergePR?: DoMergePR;

    userName?: Maybe<string>;
    repoName?: Maybe<string>;
    sha?: Maybe<string>;
}

const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch, doMergePR, userName, repoName, sha }) => {
    const { name, lastCommit } = branch ?? {};
    const { associatedPullRequests } = lastCommit ?? {};

    const githubBranchSrc = `https://github.com/${userName}/${repoName}/tree/${name}`;

    const { CommitWithStatuses, PullRequestInfo } = useUILib();

    return (
        <Tr key={name}>
            <Td>
                {name && userName && repoName && (
                    <Link href={githubBranchSrc} rel="noopener noreferrer nofollow" isExternal>
                        {name}
                    </Link>
                )}
                <Icon ml={1}>
                    <FontAwesomeIcon icon={faGithub as IconProp} />
                </Icon>
            </Td>
            <Td>
                <Suspense fallback={<Spinner />}>
                    {associatedPullRequests?.filter?.(Boolean).map((pr, idx) => (
                        <PullRequestInfo key={idx} pullRequest={pr!} doMergePR={doMergePR} />
                    ))}
                    {!associatedPullRequests && (
                        <PullRequestInfo userName={userName} repoName={repoName} sha={sha} doMergePR={doMergePR} />
                    )}
                </Suspense>
            </Td>

            <Td>{lastCommit && <CommitWithStatuses commit={lastCommit} />}</Td>
        </Tr>
    );
};

export default BranchInfoRow;
