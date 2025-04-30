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
                            ... on PullRequest {
                                headRefOid
                                number
                                url
                                title
                                #body
                                #bodyText
                                mergeStateStatus
                                closed
                                isDraft
                                #isMergeQueueEnabled
                                isInMergeQueue
                                #viewerCanDisableAutoMerge
                                #viewerCanEnableAutoMerge
                                mergeable
                                merged
                                locked
                            }
                        }
                    }
                }
            }
        `,
        branch
    );

    if (!name) {
        return null;
    }

    return <BranchInfoRow name={name} target={target} associatedPullRequests={associatedPullRequests} />;
}

export function BranchInfoRow({
    name,
    target,
    associatedPullRequests,
}: Omit<BranchInfoRowFragment_ref$data, ' $fragmentType'>) {
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
                        {associatedPullRequests ? (
                            <Suspense>
                                <PullRequestMerge associatedPullRequests={associatedPullRequests} />
                            </Suspense>
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
