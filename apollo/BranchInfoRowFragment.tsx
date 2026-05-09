import { Suspense } from 'react';
import { FragmentType, gql } from '@apollo/client';

import { useFragment } from '@apollo/client/react';
import { Link, Table, VStack } from '@chakra-ui/react';

import {
    BranchInfoRowFragment_RefFragment,
    CommitWithStatuses_CommitFragment,
    PullRequestMergeFragment_RefFragment,
} from '../app/apollo/__gen__/graphql';
import CommitFragment from './CommitWithStatuses';
import { CommitWithStatusesSkeleton } from 'components/CommitWithStatuses/CommitWithStatuses';

import { Spinner } from 'components/Spinner';
import { ClipboardIconButton, ClipboardRoot } from 'components/ui/clipboard';
import PullRequestMerge, { PullRequestMergeFragment_ref } from 'apollo/PullRequestMerge';

export const CommitWithStatuses_commit = gql`
    fragment CommitWithStatuses_commit on Commit {
        authoredDate
        status {
            id
            commit {
                oid
            }
            contexts {
                avatarUrl
                context
                #creator { login }
                state
                description
                targetUrl
            }
            state
        }
        commitUrl
        message
        # would break overall loading the whole page. shrug
        # author { user { login name avatarUrl } }
    }
`;

export const BranchInfoRowFragment_ref = gql`
    fragment BranchInfoRowFragment_ref on Ref {
        name
        id
        target {
            ... on Commit {
                ...CommitWithStatuses_commit
            }
        }
        associatedPullRequests(first: 1, states: [OPEN]) {
            edges {
                node {
                    id
                    ...PullRequestMergeFragment_ref
                }
            }
        }
    }
    ${CommitWithStatuses_commit}
    ${PullRequestMergeFragment_ref}
`;

interface Props {
    branch: FragmentType<NoInfer<BranchInfoRowFragment_RefFragment>>;
}

export default function BranchInfoRowFragment({ branch }: Props) {
    const result = useFragment<BranchInfoRowFragment_RefFragment>({
        fragmentName: 'BranchInfoRowFragment_ref',
        fragment: BranchInfoRowFragment_ref,
        from: branch,
    });

    if (!result.data) return null;

    const { data, complete } = result;
    if (!complete) return 'incomplete branch, loading...';

    const { name, target, associatedPullRequests } = data;

    // does not show default-branch
    return (associatedPullRequests.edges ?? []).map((edge) => {
        if (!edge?.node) return null;
        const { node } = edge;
        if (!node) return null;

        if (target?.__typename === 'Commit') {
            return <BranchInfoRow key={node.id} name={name} target={target} associatedPullRequest={node} />;
        }
        return <BranchInfoRow key={node.id} name={name} associatedPullRequest={node} />;
    });
}

function BranchInfoRow({
    name,
    target,
    associatedPullRequest,
}: {
    name: string;
    target?: FragmentType<CommitWithStatuses_CommitFragment>;
    associatedPullRequest?: FragmentType<PullRequestMergeFragment_RefFragment>;
}) {
    const main = false;
    //const githubBranchSrc = `https://github.com/${userName}/${repoName}/tree/${name}`;
    return (
        <Table.Row>
            <Table.Cell>
                <ClipboardRoot value={name}>
                    <Link //href={branchUrlValid ? githubBranchSrc : ''}
                        rel="noopener noreferrer nofollow"
                        target="_blank">
                        {name}
                    </Link>
                    <ClipboardIconButton />
                </ClipboardRoot>
            </Table.Cell>

            <Table.Cell>
                {!main && (
                    <Suspense
                        fallback={
                            <VStack width="6em">
                                <Spinner size="lg" />
                            </VStack>
                        }>
                        {associatedPullRequest ? (
                            <PullRequestMerge associatedPullRequest={associatedPullRequest} />
                        ) : (
                            'no PR'
                        )}
                    </Suspense>
                )}
                {main && <span>Main branch</span>}
            </Table.Cell>

            <Table.Cell>
                <Suspense fallback={<CommitWithStatusesSkeleton />}>
                    {target && <CommitFragment commit={target} />}
                </Suspense>
            </Table.Cell>
        </Table.Row>
    );
}

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
