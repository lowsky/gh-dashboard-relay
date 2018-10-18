/**
 * @flow
 * @relayHash 87c9ce167ac6b174adc8135e7e2f2bdf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserRepo_github$ref = any;
export type mainQueryVariables = {||};
export type mainQueryResponse = {|
  +github: ?{|
    +$fragmentRefs: UserRepo_github$ref
  |}
|};
export type mainQuery = {|
  variables: mainQueryVariables,
  response: mainQueryResponse,
|};
*/


/*
query mainQuery {
  github {
    ...UserRepo_github
  }
}

fragment UserRepo_github on GithubAPI {
  user(username: "lowsky") {
    ...User_user
    id
  }
  repo(ownerUsername: "lowsky", name: "dashboard") {
    ...Repo_repo
    ...BranchesTable_repo
  }
}

fragment User_user on GithubUser {
  login
  company
  avatar_url
}

fragment Repo_repo on GithubRepo {
  name
  owner {
    login
    id
  }
}

fragment BranchesTable_repo on GithubRepo {
  branches {
    ...BranchInfoRow_branch
  }
}

fragment BranchInfoRow_branch on GithubBranch {
  name
  lastCommit {
    ...CommitWithStatuses_commit
  }
}

fragment CommitWithStatuses_commit on GithubCommit {
  sha
  message
  date
  status {
    context
    description
    state
    target_url
    updated_at
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "mainQuery",
  "id": null,
  "text": "query mainQuery {\n  github {\n    ...UserRepo_github\n  }\n}\n\nfragment UserRepo_github on GithubAPI {\n  user(username: \"lowsky\") {\n    ...User_user\n    id\n  }\n  repo(ownerUsername: \"lowsky\", name: \"dashboard\") {\n    ...Repo_repo\n    ...BranchesTable_repo\n  }\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n    id\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "mainQuery",
    "type": "GraphQL_github_API",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "github",
        "storageKey": null,
        "args": null,
        "concreteType": "GithubAPI",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserRepo_github",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "mainQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "github",
        "storageKey": null,
        "args": null,
        "concreteType": "GithubAPI",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": "user(username:\"lowsky\")",
            "args": [
              {
                "kind": "Literal",
                "name": "username",
                "value": "lowsky",
                "type": "String!"
              }
            ],
            "concreteType": "GithubUser",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "company",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatar_url",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repo",
            "storageKey": "repo(name:\"dashboard\",ownerUsername:\"lowsky\")",
            "args": [
              {
                "kind": "Literal",
                "name": "name",
                "value": "dashboard",
                "type": "String!"
              },
              {
                "kind": "Literal",
                "name": "ownerUsername",
                "value": "lowsky",
                "type": "String!"
              }
            ],
            "concreteType": "GithubRepo",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "GithubUser",
                "plural": false,
                "selections": [
                  v0,
                  v1
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "branches",
                "storageKey": null,
                "args": null,
                "concreteType": "GithubBranch",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lastCommit",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GithubCommit",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "sha",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "message",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "status",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "GithubStatus",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "context",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "description",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "state",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "target_url",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "updated_at",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88a3edb48a603a39d1416ace8434cb95';
module.exports = node;
