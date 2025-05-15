/**
 * @generated SignedSource<<2f5db0063c7cb6d3bca027f3449f9afa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BranchInfoRowStoryQuery$variables = Record<PropertyKey, never>;
export type BranchInfoRowStoryQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"BranchInfoRowFragment_ref">;
  } | null | undefined;
};
export type BranchInfoRowStoryQuery = {
  response: BranchInfoRowStoryQuery$data;
  variables: BranchInfoRowStoryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oid",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "GitObjectID"
},
v11 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "URI"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "URI"
},
v15 = {
  "enumValues": [
    "ERROR",
    "EXPECTED",
    "FAILURE",
    "PENDING",
    "SUCCESS"
  ],
  "nullable": false,
  "plural": false,
  "type": "StatusState"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BranchInfoRowStoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BranchInfoRowFragment_ref"
              }
            ],
            "type": "Ref",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BranchInfoRowStoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Status",
                        "kind": "LinkedField",
                        "name": "status",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Commit",
                            "kind": "LinkedField",
                            "name": "commit",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/)
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
                              (v5/*: any*/),
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
                                  (v1/*: any*/),
                                  (v6/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v4/*: any*/)
                                    ],
                                    "type": "Node",
                                    "abstractKey": "__isNode"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/),
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
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
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
                              (v6/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v4/*: any*/)
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
                  (v4/*: any*/)
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
                          (v4/*: any*/),
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
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "associatedPullRequests(first:1,states:[\"OPEN\"])"
              }
            ],
            "type": "Ref",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "d3c685399ae5f6bbb1036f7d0d20477a",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "node.__typename": (v8/*: any*/),
        "node.associatedPullRequests": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PullRequestConnection"
        },
        "node.associatedPullRequests.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "PullRequestEdge"
        },
        "node.associatedPullRequests.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PullRequest"
        },
        "node.associatedPullRequests.edges.node.closed": (v9/*: any*/),
        "node.associatedPullRequests.edges.node.headRefOid": (v10/*: any*/),
        "node.associatedPullRequests.edges.node.id": (v11/*: any*/),
        "node.associatedPullRequests.edges.node.isDraft": (v9/*: any*/),
        "node.associatedPullRequests.edges.node.isInMergeQueue": (v9/*: any*/),
        "node.associatedPullRequests.edges.node.mergeStateStatus": {
          "enumValues": [
            "BEHIND",
            "BLOCKED",
            "CLEAN",
            "DIRTY",
            "DRAFT",
            "HAS_HOOKS",
            "UNKNOWN",
            "UNSTABLE"
          ],
          "nullable": false,
          "plural": false,
          "type": "MergeStateStatus"
        },
        "node.associatedPullRequests.edges.node.mergeable": {
          "enumValues": [
            "CONFLICTING",
            "MERGEABLE",
            "UNKNOWN"
          ],
          "nullable": false,
          "plural": false,
          "type": "MergeableState"
        },
        "node.associatedPullRequests.edges.node.number": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "node.associatedPullRequests.edges.node.title": (v8/*: any*/),
        "node.associatedPullRequests.edges.node.url": (v12/*: any*/),
        "node.id": (v11/*: any*/),
        "node.name": (v8/*: any*/),
        "node.target": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "GitObject"
        },
        "node.target.__typename": (v8/*: any*/),
        "node.target.abbreviatedOid": (v8/*: any*/),
        "node.target.author": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "GitActor"
        },
        "node.target.author.user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "User"
        },
        "node.target.author.user.avatarUrl": (v12/*: any*/),
        "node.target.author.user.id": (v11/*: any*/),
        "node.target.author.user.login": (v8/*: any*/),
        "node.target.author.user.name": (v13/*: any*/),
        "node.target.authoredDate": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "DateTime"
        },
        "node.target.commitUrl": (v12/*: any*/),
        "node.target.id": (v11/*: any*/),
        "node.target.message": (v8/*: any*/),
        "node.target.oid": (v10/*: any*/),
        "node.target.status": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Status"
        },
        "node.target.status.commit": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Commit"
        },
        "node.target.status.commit.id": (v11/*: any*/),
        "node.target.status.commit.oid": (v10/*: any*/),
        "node.target.status.contexts": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "StatusContext"
        },
        "node.target.status.contexts.avatarUrl": (v14/*: any*/),
        "node.target.status.contexts.context": (v8/*: any*/),
        "node.target.status.contexts.creator": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Actor"
        },
        "node.target.status.contexts.creator.__isNode": (v8/*: any*/),
        "node.target.status.contexts.creator.__typename": (v8/*: any*/),
        "node.target.status.contexts.creator.id": (v11/*: any*/),
        "node.target.status.contexts.creator.login": (v8/*: any*/),
        "node.target.status.contexts.description": (v13/*: any*/),
        "node.target.status.contexts.id": (v11/*: any*/),
        "node.target.status.contexts.state": (v15/*: any*/),
        "node.target.status.contexts.targetUrl": (v14/*: any*/),
        "node.target.status.id": (v11/*: any*/),
        "node.target.status.state": (v15/*: any*/)
      }
    },
    "name": "BranchInfoRowStoryQuery",
    "operationKind": "query",
    "text": "query BranchInfoRowStoryQuery {\n  node(id: \"test-id\") {\n    __typename\n    ... on Ref {\n      ...BranchInfoRowFragment_ref\n    }\n    id\n  }\n}\n\nfragment BranchInfoRowFragment_ref on Ref {\n  name\n  target {\n    __typename\n    ...CommitWithStatuses_commit\n    id\n  }\n  associatedPullRequests(first: 1, states: [OPEN]) {\n    edges {\n      node {\n        id\n        ...PullRequestMergeFragment_ref\n      }\n    }\n  }\n}\n\nfragment CommitWithStatuses_commit on Commit {\n  authoredDate\n  oid\n  status {\n    id\n    commit {\n      oid\n      id\n    }\n    contexts {\n      avatarUrl\n      context\n      creator {\n        __typename\n        login\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      state\n      description\n      targetUrl\n      id\n    }\n    state\n  }\n  commitUrl\n  abbreviatedOid\n  message\n  author {\n    user {\n      login\n      name\n      avatarUrl\n      id\n    }\n  }\n}\n\nfragment PullRequestMergeFragment_ref on PullRequest {\n  id\n  headRefOid\n  number\n  url\n  title\n  mergeStateStatus\n  closed\n  isDraft\n  isInMergeQueue\n  mergeable\n}\n"
  }
};
})();

(node as any).hash = "4655145b6f6e507882124957fd0d2a0f";

export default node;
