import { graphql } from 'react-relay';

export const userQuery = graphql`
    query relayPageUserQuery($userName: String!) {
        user(username: $userName) {
            ...UserRepo_user
        }
    }
`;
export const repoQuery = graphql`
    query relayPageRepoQuery($userName: String!, $repoName: String!) {
        repo(ownerUsername: $userName, name: $repoName) {
            ...UserRepo_repo
        }
    }
`;
