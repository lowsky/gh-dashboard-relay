// Create a new schema with mocks
import { addMocksToSchema } from '@graphql-tools/mock';
import { graphql } from 'graphql';

import { schema } from './src/localSchema';

const schemaWithMocks = addMocksToSchema({ schema, preserveResolvers: true });

// Run the GraphQL query '{ hello }' and print out the response
graphql(
    schemaWithMocks,
    //  schema,
    `
        {
            github {
                user(username: "lowsky") {
                    login
                    company
                    repos {
                        id
                        name
                    }
                }

                repo(name: "dashboard", ownerUsername: "lowsky") {
                    branches(limit: 1) {
                        name
                        lastCommit {
                            sha
                            #author{           ... on GithubUser {login} }
                            status {
                                description
                            }
                        }
                    }
                }
            }
            user(username: "lowsky") {
                login
                id
                avatar_url
            }
        }
    `
).then((response) => {
    //console.info(response);
    console.log(Object.keys(response));
    const { data, errors } = response;
    errors && console.log(errors);
    if (!data) return;

    keys(data, 'data');
    // eslint-disable-next-line no-unused-vars
    const { user, github } = data;

    keys(github, 'github');
    // eslint-disable-next-line no-constant-condition
    if (false && github.user) {
        console.log(github.user);
        keys(github.user, 'user');
        keys(github.user.repos, 'userrepos');
        console.info(github.user.repos);
    }
    if (github.repo) {
        keys(github.repo, 'repo');
        console.info(github.repo);
        const branch = github.repo.branches[0];
        keys(branch, 'branch');
        console.info(branch);
        console.info(branch.lastCommit.status);
        keys(branch.lastCommit.status[0]);
        branch.lastCommit.status.map((s) => console.info(s));
    }
});

function keys(obj, title = '???') {
    console.log(title, Object.keys(obj));
}
