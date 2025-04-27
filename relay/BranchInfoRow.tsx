import { Suspense } from 'react';
import { graphql, useFragment } from 'react-relay';
import { Icon, Link, Table, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { BranchInfoRow_ref$data, BranchInfoRow_ref$key } from './__generated__/BranchInfoRow_ref.graphql';
import CommitFragmentContainer from './CommitWithStatuses';
import { CommitWithStatusesSkeleton } from 'components/CommitWithStatuses/CommitWithStatuses';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import doMergePRAction from '../app/actions/doMergePRAction';
import { type DoMergePR } from 'components/PullRequestMerge';

import { Spinner } from 'components/Spinner';
import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';
import { ClipboardIconButton, ClipboardRoot } from 'components/ui/clipboard';

export default function BranchInfoRowFragmentContainer({ branch }: { branch: BranchInfoRow_ref$key }) {
    const { name, target, associatedPullRequests } = useFragment<BranchInfoRow_ref$key>(
        graphql`
            fragment BranchInfoRow_ref on Ref {
                name
                target {
                    ...CommitWithStatuses_commit
                }
                associatedPullRequests(first: 1, states: [OPEN]) {
                    edges {
                        node {
                            ... on PullRequest {
                                #id
                                headRefOid
                                number
                                url
                                title
                                #body
                                #bodyText
                                #isReadByViewer
                                closed
                                #isDraft
                                #isMergeQueueEnabled
                                #isInMergeQueue
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

    const main = false; // TODO check if this is still required/needed

    return (
        <Table.Row>
            <Table.Cell>
                {name && (
                    <ClipboardRoot value={name}>
                        <Link
                            //href={branchUrlValid ? githubBranchSrc : ''}
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
                        {associatedPullRequests ? (
                            <Suspense>
                                <span>
                                    {
                                        //JSON.stringify(associatedPullRequests, null, 2)
                                        <PullRequestMerge pullRequest={associatedPullRequests} />
                                    }
                                </span>
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
                    {target && <CommitFragmentContainer commit={target} />}
                </Suspense>
            </Table.Cell>
        </Table.Row>
    );
}

type PullRequestMergeProps = { pullRequest: BranchInfoRow_ref$data['associatedPullRequests'] };

function PullRequestMerge(props: PullRequestMergeProps) {
    const { pullRequest } = props;

    const { userName, repoName } = useUserRepo();

    return pullRequest?.edges?.map((edge) => {
        if (!edge) return null;

        const { node } = edge;
        if (!node) return null;

        const { number, url, title, closed, mergeable, merged, locked, headRefOid } = node;
        const sha = headRefOid;

        const doMergePR: DoMergePR = async () => {
            return doMergePRAction(number, userName, repoName, sha);
        };

        return (
            <VStack width="6em" key={number}>
                {url ? (
                    <Link href={url} title={title ?? '-no-title-'} rel="noopener noreferrer nofollow">
                        <Icon mr={1}>
                            <FontAwesomeIcon icon={faCodePullRequest} />
                        </Icon>
                        {number}
                    </Link>
                ) : (
                    <span>
                        <Icon mr={1}>
                            <FontAwesomeIcon icon={faCodePullRequest} />
                        </Icon>
                        {number}
                    </span>
                )}
                {merged ? (
                    '-merged-'
                ) : closed ? (
                    '-closed-'
                ) : locked ? (
                    '-locked-'
                ) : !mergeable ? (
                    '-not mergeable-'
                ) : (
                    <MergeButtonWithErrorStatus doMergePR={doMergePR} />
                )}
            </VStack>
        );
    });
}
