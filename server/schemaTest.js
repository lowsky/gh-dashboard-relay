"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a new schema with mocks
var mock_1 = require("@graphql-tools/mock");
var graphql_1 = require("graphql");
var localSchema_1 = require("./localSchema");
var schemaWithMocks = mock_1.addMocksToSchema({ schema: localSchema_1.schema, preserveResolvers: true });
function keys(obj, title) {
    if (title === void 0) { title = '???'; }
    console.log(title, Object.keys(obj));
}
// Run the GraphQL query '{ hello }' and print out the response
graphql_1.graphql(schemaWithMocks, 
//  schema,
"\n        {\n            github {\n                user(username: \"lowsky\") {\n                    login\n                    company\n                    repos {\n                        id\n                        name\n                    }\n                }\n\n                repo(name: \"dashboard\", ownerUsername: \"lowsky\") {\n                    branches(limit: 1) {\n                        name\n                        lastCommit {\n                            sha\n                            #author{           ... on GithubUser {login} }\n                            status {\n                                description\n                            }\n                        }\n                    }\n                }\n            }\n            user(username: \"lowsky\") {\n                login\n                id\n                avatar_url\n            }\n        }\n    ").then(function (response) {
    //console.info(response);
    console.log(Object.keys(response));
    var data = response.data, errors = response.errors;
    errors && console.log(errors);
    if (!data)
        return;
    keys(data, 'data');
    // eslint-disable-next-line no-unused-vars
    var user = data.user, github = data.github;
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
        var branch = github.repo.branches[0];
        keys(branch, 'branch');
        console.info(branch);
        console.info(branch.lastCommit.status);
        keys(branch.lastCommit.status[0]);
        branch.lastCommit.status.map(function (s) { return console.info(s); });
    }
});
