import { graphql, useFragment } from 'react-relay';

import UserRepo from '../container/UserRepo';

export default function UserRepoFragmentContainer(props) {
    const user = useFragment(
        graphql`
            fragment UserRepo_user on GithubUser {
                ...User_user
            }
        `,
        props.user
    );
    const repo = useFragment(
        graphql`
            fragment UserRepo_repo on GithubRepo {
                ...Repo_repo
                ...BranchesTable_repo
            }
        `,
        props.repo
    );
    return <UserRepo user={user} repo={repo} />;
}
