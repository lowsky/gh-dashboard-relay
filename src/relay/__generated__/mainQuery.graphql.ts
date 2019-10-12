/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type UserRepo_github$ref = any;
export type mainQueryVariables = {
    readonly userName: string;
    readonly repoName: string;
};
export type mainQueryResponse = {
    readonly github: {
        readonly " $fragmentRefs": UserRepo_github$ref;
    } | null;
};
export type mainQuery = {
    readonly response: mainQueryResponse;
    readonly variables: mainQueryVariables;
};



/*
query mainQuery(
  $userName: String!
  $repoName: String!
) {
  github {
    ...UserRepo_github_3YBi4U
  }
}

fragment UserRepo_github_3YBi4U on GithubAPI {
  user(username: $userName) {
    ...User_user
    id
  }
  repo(ownerUsername: $userName, name: $repoName) {
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userName",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "repoName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "mainQuery",
    "type": "GraphQL_github_API",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
            "args": [
              {
                "kind": "Variable",
                "name": "repoName",
                "variableName": "repoName"
              },
              {
                "kind": "Variable",
                "name": "userName",
                "variableName": "userName"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "mainQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "username",
                "variableName": "userName"
              }
            ],
            "concreteType": "GithubUser",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repo",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "name",
                "variableName": "repoName"
              },
              {
                "kind": "Variable",
                "name": "ownerUsername",
                "variableName": "userName"
              }
            ],
            "concreteType": "GithubRepo",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "GithubUser",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
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
                  (v3/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "mainQuery",
    "id": null,
    "text": "query mainQuery(\n  $userName: String!\n  $repoName: String!\n) {\n  github {\n    ...UserRepo_github_3YBi4U\n  }\n}\n\nfragment UserRepo_github_3YBi4U on GithubAPI {\n  user(username: $userName) {\n    ...User_user\n    id\n  }\n  repo(ownerUsername: $userName, name: $repoName) {\n    ...Repo_repo\n    ...BranchesTable_repo\n  }\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n    id\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1a9fad152056f68ccabd90be6f87a55c';
export default node;
