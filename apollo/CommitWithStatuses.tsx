import { useFragment } from '@apollo/client/react';
import type { FragmentType } from '@apollo/client';
import CommitWithStatus from 'components/CommitWithStatuses/CommitWithStatuses';
import { CommitWithStatuses_commit } from 'apollo/BranchInfoRowFragment';
import type { CommitWithStatuses_CommitFragment } from '../app/apollo/__gen__/graphql';

export default function CommitFragment({ commit }: { commit: FragmentType<CommitWithStatuses_CommitFragment> }) {
    const { complete, data } = useFragment<CommitWithStatuses_CommitFragment>({
        fragment: CommitWithStatuses_commit,
        fragmentName: 'CommitWithStatuses_commit',
        from: commit,
    });

    if (!complete) return 'incomplete commit, loading...';
    if (!data) return null;

    return <CommitWithStatus {...data} />;
}
