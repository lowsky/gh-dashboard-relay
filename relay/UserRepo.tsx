import { createFragmentContainer, graphql } from 'react-relay';

import UserRepo, { UserRepoProps } from '../container/UserRepo';

export default createFragmentContainer<UserRepoProps>(UserRepo, {
    user: graphql`
        fragment UserRepo_user on GithubUser {
            ...User_user
        }
    `,
    repo: graphql`
        fragment UserRepo_repo on GithubRepo {
            ...Repo_repo
            ...BranchesTable_repo
        }
    `,
});
