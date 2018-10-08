import { createFragmentContainer } from 'react-relay';
import graphql from "babel-plugin-relay/macro";
import Repo from '../components/Repo';

export default createFragmentContainer(
    Repo,
    graphql`
        fragment Repo_repo on GithubRepo {
            name
            owner {
                login
            }
        }
    `
);
