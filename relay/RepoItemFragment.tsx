import { graphql, useFragment } from 'react-relay';
import { RepoItemFragment_repo$key } from 'relay/__generated__/RepoItemFragment_repo.graphql';

import { RepoItem } from 'components/RepoItem';

export function RepoItemFragment({ repo, hideIfFork }: { repo: RepoItemFragment_repo$key; hideIfFork?: boolean }) {
    const data = useFragment<RepoItemFragment_repo$key>(
        graphql`
            fragment RepoItemFragment_repo on Repository @refetchable(queryName: "RepoItemRefetchFragment") {
                name
                nameWithOwner
                isFork
                url
                pullRequests(first: 1, states: [OPEN]) {
                    totalCount
                }
            }
        `,
        repo
    );
    if (!data) return null;

    return <RepoItem repo={data} hideIfFork={hideIfFork} />;
}
