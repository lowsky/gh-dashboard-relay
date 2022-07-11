import { graphql, useFragment } from 'react-relay';

import Repo from '../components/Repo';

export default function UserRepoFragmentContainer(props) {
    const repo = useFragment(
        graphql`
            fragment Repo_repo on GithubRepo {
                name
                owner {
                    login
                }
            }
        `,
        props.repo
    );
    return <Repo repo={repo} />;
}
