'use client';

import React, { Suspense } from 'react';
import { Link, Table, VStack } from '@chakra-ui/react';

import { ClipboardIconButton, ClipboardRoot } from 'components/ui/clipboard';

import { GithubBranch, Maybe } from 'restinpeace/types';
import { useUserRepo } from 'components/useUserRepoFromRoute';
import { Spinner } from 'components/Spinner';
import { useUILib } from 'components/UILibContext';
import { CommitWithStatusesSkeleton } from 'components/CommitWithStatuses/CommitWithStatuses';

export interface BranchInfoRowProps {
    branch: GithubBranch;
    sha?: Maybe<string>;
}

const BranchInfoRow: React.FC<BranchInfoRowProps> = ({ branch, sha }) => {
    const { userName, repoName } = useUserRepo();

    const { name, lastCommit } = branch ?? {};
    const { associatedPullRequests } = lastCommit ?? {};

    const githubBranchSrc = `https://github.com/${userName}/${repoName}/tree/${name}`;

    const { CommitWithStatuses, PullRequestInfo } = useUILib();

    const branchUrlValid = userName && repoName;

    const main = name === 'master' || name === 'main';
    return (
        <Table.Row key={name}>
            <Table.Cell>
                {name && (
                    <ClipboardRoot value={name}>
                        <Link
                            href={branchUrlValid ? githubBranchSrc : ''}
                            rel="noopener noreferrer nofollow"
                            target="_blank">
                            {name}
                        </Link>
                        <ClipboardIconButton />
                    </ClipboardRoot>
                )}
            </Table.Cell>
            <Table.Cell>
                {!main && (
                    <Suspense
                        fallback={
                            <VStack width="6em">
                                <Spinner size="lg" />
                            </VStack>
                        }>
                        {associatedPullRequests
                            ?.filter?.(Boolean)
                            .map((pr, idx) => <PullRequestInfo key={idx} pullRequest={pr!} />)}
                        {!associatedPullRequests && <PullRequestInfo sha={sha} />}
                    </Suspense>
                )}
                {main && <span>Main branch</span>}
            </Table.Cell>

            <Table.Cell>
                <Suspense fallback={<CommitWithStatusesSkeleton />}>
                    {lastCommit && <CommitWithStatuses commit={lastCommit} />}
                </Suspense>
            </Table.Cell>
        </Table.Row>
    );
};

export default BranchInfoRow;

export const SkeletonRow = () => (
    <Table.Row>
        <Table.Cell>
            <Spinner />
        </Table.Cell>
        <Table.Cell>
            <Spinner />
        </Table.Cell>
        <Table.Cell>
            <Spinner />
        </Table.Cell>
    </Table.Row>
);
