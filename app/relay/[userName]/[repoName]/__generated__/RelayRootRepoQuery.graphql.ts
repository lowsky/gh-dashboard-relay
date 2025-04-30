/**
 * @generated SignedSource<<bc77142ac9d583e5121e228673646472>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelayRootRepoQuery$variables = {
  repoName: string;
  userName: string;
};
export type RelayRootRepoQuery$data = {
  readonly repository: {
    readonly " $fragmentSpreads": FragmentRefs<"RepoWithBranchListFragment_repo">;
  } | null | undefined;
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"UserFragment_user">;
  } | null | undefined;
};
export type RelayRootRepoQuery = {
  response: RelayRootRepoQuery$data;
  variables: RelayRootRepoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repoName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userName"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "repoName"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "userName"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "userName"
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "refPrefix",
    "value": "refs/heads/"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oid",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayRootRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoWithBranchListFragment_repo"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserFragment_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RelayRootRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": "branches",
            "args": (v4/*: any*/),
            "concreteType": "RefConnection",
            "kind": "LinkedField",
            "name": "refs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RefEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Ref",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "target",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "authoredDate",
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Status",
                                "kind": "LinkedField",
                                "name": "status",
                                "plural": false,
                                "selections": [
                                  (v8/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Commit",
                                    "kind": "LinkedField",
                                    "name": "commit",
                                    "plural": false,
                                    "selections": [
                                      (v7/*: any*/),
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "StatusContext",
                                    "kind": "LinkedField",
                                    "name": "contexts",
                                    "plural": true,
                                    "selections": [
                                      (v9/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "context",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "creator",
                                        "plural": false,
                                        "selections": [
                                          (v6/*: any*/),
                                          (v10/*: any*/),
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              (v8/*: any*/)
                                            ],
                                            "type": "Node",
                                            "abstractKey": "__isNode"
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v11/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "description",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "targetUrl",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "commitUrl",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "abbreviatedOid",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "message",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "GitActor",
                                "kind": "LinkedField",
                                "name": "author",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "user",
                                    "plural": false,
                                    "selections": [
                                      (v10/*: any*/),
                                      (v5/*: any*/),
                                      (v9/*: any*/),
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Commit",
                            "abstractKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 1
                          },
                          {
                            "kind": "Literal",
                            "name": "states",
                            "value": [
                              "OPEN"
                            ]
                          }
                        ],
                        "concreteType": "PullRequestConnection",
                        "kind": "LinkedField",
                        "name": "associatedPullRequests",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PullRequestEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "PullRequest",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "headRefOid",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "number",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mergeStateStatus",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "closed",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isDraft",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isInMergeQueue",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mergeable",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "merged",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "locked",
                                    "storageKey": null
                                  },
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "associatedPullRequests(first:1,states:[\"OPEN\"])"
                      },
                      (v8/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "refs(first:10,refPrefix:\"refs/heads/\")"
          },
          {
            "alias": "branches",
            "args": (v4/*: any*/),
            "filters": [
              "refPrefix"
            ],
            "handle": "connection",
            "key": "RepoWithBranchList_repositories_branches",
            "kind": "LinkedHandle",
            "name": "refs"
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "company",
            "storageKey": null
          },
          (v9/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d80acc3fe6c1ab39aa50bb672858a4a9",
    "id": null,
    "metadata": {},
    "name": "RelayRootRepoQuery",
    "operationKind": "query",
    "text": "query RelayRootRepoQuery(\n  $userName: String!\n  $repoName: String!\n) {\n  repository(name: $repoName, owner: $userName) {\n    ...RepoWithBranchListFragment_repo\n    id\n  }\n  user(login: $userName) {\n    ...UserFragment_user\n    id\n  }\n}\n\nfragment BranchInfoRowFragment_ref on Ref {\n  name\n  target {\n    __typename\n    ...CommitWithStatuses_commit\n    id\n  }\n  associatedPullRequests(first: 1, states: [OPEN]) {\n    edges {\n      node {\n        headRefOid\n        number\n        url\n        title\n        mergeStateStatus\n        closed\n        isDraft\n        isInMergeQueue\n        mergeable\n        merged\n        locked\n        id\n      }\n    }\n  }\n}\n\nfragment CommitWithStatuses_commit on Commit {\n  authoredDate\n  oid\n  status {\n    id\n    commit {\n      oid\n      id\n    }\n    contexts {\n      avatarUrl\n      context\n      creator {\n        __typename\n        login\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      state\n      description\n      targetUrl\n      id\n    }\n    state\n  }\n  commitUrl\n  abbreviatedOid\n  message\n  author {\n    user {\n      login\n      name\n      avatarUrl\n      id\n    }\n  }\n}\n\nfragment RepoWithBranchListFragment_repo on Repository {\n  branches: refs(refPrefix: \"refs/heads/\", first: 10) {\n    edges {\n      node {\n        ...BranchInfoRowFragment_ref\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserFragment_user on User {\n  login\n  company\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "8161d64a0684a380adfc286fd7c0c436";

export default node;
