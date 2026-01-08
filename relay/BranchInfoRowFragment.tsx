import { Suspense } from 'react';
import { graphql, useFragment } from 'react-relay';
import { Link, Table, VStack } from '@chakra-ui/react';

import {
    BranchInfoRowFragment_ref$data,
    BranchInfoRowFragment_ref$key,
} from './__generated__/BranchInfoRowFragment_ref.graphql';
import CommitFragment from './CommitWithStatuses';
import { CommitWithStatusesSkeleton } from 'components/CommitWithStatuses/CommitWithStatuses';
import PullRequestMerge from 'relay/PullRequestMerge';

import { Spinner } from 'components/Spinner';
import { ClipboardIconButton, ClipboardRoot } from 'components/ui/clipboard';
import { PullRequestMergeFragment_ref$key } from './__generated__/PullRequestMergeFragment_ref.graphql';

export default function BranchInfoRowFragment({ branch }: { branch: BranchInfoRowFragment_ref$key }) {
    const { name, target, associatedPullRequests } = useFragment<BranchInfoRowFragment_ref$key>(
        graphql`
            fragment BranchInfoRowFragment_ref on Ref {
                name
                target {
                    ...CommitWithStatuses_commit
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
        `,
        branch
    );

    return (associatedPullRequests.edges ?? []).map((edge) => {
        if (!edge?.node) return null;
        const { node } = edge;
        if (!node) return null;

        return <BranchInfoRow key={node.id} name={name} target={target} associatedPullRequest={node} />;
    });
}

function BranchInfoRow({
    name,
    target,
    associatedPullRequest,
}: {
    name: string;
    target: BranchInfoRowFragment_ref$data['target'] | null;
    associatedPullRequest: PullRequestMergeFragment_ref$key;
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
