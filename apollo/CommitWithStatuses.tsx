import CommitWithStatus from 'components/CommitWithStatuses/CommitWithStatuses';
import { CommitWithStatuses_commit } from 'apollo/BranchInfoRowFragment';
import { useFragment } from '@apollo/client/react';
import { FragmentType } from '@apollo/client';
import { CommitWithStatuses_CommitFragment } from '../app/apollo/__gen__/graphql';

export default function CommitFragment({ commit }: { commit: FragmentType<CommitWithStatuses_CommitFragment> }) {
    const { complete, data } = useFragment<CommitWithStatuses_CommitFragment>({
        fragment: CommitWithStatuses_commit,
        from: commit,
    });

    if (!complete) return 'incomplete commit, loading...';
    if (!data) return null;

    return <CommitWithStatus {...data} />;
}
