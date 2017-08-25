/**
 * @flow
 * @relayHash d58bea892abbf4bc5c8655e1a13717e7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type mainQueryResponse = {|
  +github: ?{| |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "GithubAPI",
        "name": "github",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserRepo_github",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "GraphQL_github_API"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "mainQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "mainQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "GithubAPI",
        "name": "github",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "username",
                "value": "lowsky",
                "type": "String!"
              }
            ],
            "concreteType": "GithubUser",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "login",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "company",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "avatar_url",
                "storageKey": null
              }
            ],
            "storageKey": "user{\"username\":\"lowsky\"}"
          },
          {
            "kind": "LinkedField",
            "alias": null,
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
            "name": "repo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "GithubUser",
                "name": "owner",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "login",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "GithubBranch",
                "name": "branches",
                "plural": true,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "type": "GithubBranch",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "GithubCommit",
                        "name": "lastCommit",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "sha",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "message",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "GithubStatus",
                            "name": "status",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "context",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "description",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "state",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "target_url",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "updated_at",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repo{\"name\":\"dashboard\",\"ownerUsername\":\"lowsky\"}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query mainQuery {\n  github {\n    ...UserRepo_github\n  }\n}\n\nfragment UserRepo_github on GithubAPI {\n  user(username: \"lowsky\") {\n    ...User_user\n  }\n  repo(ownerUsername: \"lowsky\", name: \"dashboard\") {\n    ...Repo_repo\n    ...BranchesTable_repo\n  }\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n  }\n}\n"
};

module.exports = batch;
