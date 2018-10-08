import { createFragmentContainer } from 'react-relay';
import graphql from "babel-plugin-relay/macro";

import UserRepo from '../container/UserRepo';

export default createFragmentContainer(
    UserRepo,
    /* TODO manually deal with:
    initialVariables: {
        username: 'lowsky',
        ownerUsername: 'lowsky',
        repoName: 'dashboard',
    }
    */
    graphql`
        fragment UserRepo_github on GithubAPI {
            user(username: "lowsky") {
                ...User_user
            }
            repo(ownerUsername: "lowsky", name: "dashboard") {
                ...Repo_repo
                ...BranchesTable_repo
            }
        }
    `
);
