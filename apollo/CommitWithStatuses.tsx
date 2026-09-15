import { useFragment } from '@apollo/client/react';
import type { FragmentType } from '@apollo/client';
import CommitWithStatus from 'components/CommitWithStatuses/CommitWithStatuses';
import { CommitWithStatuses_commit } from 'apollo/BranchInfoRowFragment';
import type { CommitWithStatuses_CommitFragment } from '../app/apollo/__gen__/graphql';

export default function CommitFragment({ commit }: { commit: FragmentType<CommitWithStatuses_CommitFragment> }) {
    const { complete, data }: useFragment.Result<CommitWithStatuses_CommitFragment> =
        useFragment<CommitWithStatuses_CommitFragment>({
            fragment: CommitWithStatuses_commit,
            fragmentName: 'CommitWithStatuses_commit',
            from: commit,
        });

    if (!complete) return 'incomplete commit, loading...';
    if (!data) return null;

    const { status, message, authoredDate, commitUrl } = data;

    return (
        <CommitWithStatus
            author={data.author}
            authoredDate={authoredDate}
            commitUrl={commitUrl}
            message={message}
            status={status}
        />
    );
}
