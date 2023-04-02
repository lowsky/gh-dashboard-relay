import { graphql, useFragment } from 'react-relay';

import BranchesTable from '../container/BranchesTable';

export default function BranchesTableFragmentContainer(props) {
    const repo = useFragment(
        graphql`
            fragment BranchesTable_repo on GithubRepo {
                branches {
                    ...BranchInfoRow_branch
                }
            }
        `,
        props.repo
    );

    return <BranchesTable repo={repo} />;
}
