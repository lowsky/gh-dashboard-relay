import { createFragmentContainer, graphql } from 'react-relay';
import React from 'react';
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
