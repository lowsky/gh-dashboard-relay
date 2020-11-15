import { graphql } from 'react-relay'

export default graphql`
    query relayPageQuery($userName: String!, $repoName: String!) {
        github {
            ...UserRepo_github @arguments(userName: $userName, repoName: $repoName)
        }
    }
`;