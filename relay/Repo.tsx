import { createFragmentContainer } from 'react-relay';
import { graphql } from "react-relay";
import Repo from '../components/Repo';

export default createFragmentContainer(Repo, {
    repo: graphql`
        fragment Repo_repo on GithubRepo {
            name
            owner {
                login
            }
        }
    `,
});
