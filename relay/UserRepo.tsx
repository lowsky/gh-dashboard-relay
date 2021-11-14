import { createFragmentContainer, graphql } from 'react-relay';

import UserRepo, { UserRepoProps } from '../container/UserRepo';

export default createFragmentContainer<UserRepoProps>(UserRepo, {
    user: graphql`
        fragment UserRepo_user on GithubUser
            @argumentDefinitions(
                userName: { type: "String", defaultValue: "lowsky" }
            ) {
            ...User_user
        }
    `,
    repo: graphql`
        fragment UserRepo_repo on GithubRepo
            @argumentDefinitions(
                userName: { type: "String", defaultValue: "lowsky" }
                repoName: { type: "String", defaultValue: "dashboard" }
            ) {
            ...Repo_repo
            ...BranchesTable_repo
        }
    `,
});
