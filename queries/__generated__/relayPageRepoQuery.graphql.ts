/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type relayPageRepoQueryVariables = {
    userName: string;
    repoName: string;
};
export type relayPageRepoQueryResponse = {
    readonly repo: {
        readonly " $fragmentRefs": FragmentRefs<"UserRepo_repo">;
    } | null;
};
export type relayPageRepoQuery = {
    readonly response: relayPageRepoQueryResponse;
    readonly variables: relayPageRepoQueryVariables;
};



/*
query relayPageRepoQuery(
  $userName: String!
  $repoName: String!
) {
  repo(ownerUsername: $userName, name: $repoName) {
    ...UserRepo_repo_3KzBEb
  }
}

fragment BranchInfoRow_branch on GithubBranch {
  name
  lastCommit {
    ...CommitWithStatuses_commit
    associatedPullRequests {
      ...PullRequestInfo_pullRequest
    }
  }
}

fragment BranchesTable_repo on GithubRepo {
  branches {
    ...BranchInfoRow_branch
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
    avatar_url
  }
}

fragment PullRequestInfo_pullRequest on PullRequest {
  title
  number
  url
}

fragment Repo_repo on GithubRepo {
  name
  owner {
    login
  }
}

fragment UserRepo_repo_3KzBEb on GithubRepo {
  ...Repo_repo
  ...BranchesTable_repo
}
*/

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
    "name": "ownerUsername",
    "variableName": "userName"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
    "name": "relayPageRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "GithubRepo",
        "kind": "LinkedField",
        "name": "repo",
        "plural": false,
        "selections": [
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "UserRepo_repo"
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
    "name": "relayPageRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "GithubRepo",
        "kind": "LinkedField",
        "name": "repo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "GithubUser",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "login",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GithubBranch",
            "kind": "LinkedField",
            "name": "branches",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "GithubCommit",
                "kind": "LinkedField",
                "name": "lastCommit",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sha",
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
                    "kind": "ScalarField",
                    "name": "date",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GithubStatus",
                    "kind": "LinkedField",
                    "name": "status",
                    "plural": true,
                    "selections": [
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
                        "kind": "ScalarField",
                        "name": "description",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "state",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "target_url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "updated_at",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "avatar_url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PullRequest",
                    "kind": "LinkedField",
                    "name": "associatedPullRequests",
                    "plural": true,
                    "selections": [
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
                        "name": "number",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "62e4bca18b0bc652f89e8b0ad8e0401b",
    "id": null,
    "metadata": {},
    "name": "relayPageRepoQuery",
    "operationKind": "query",
    "text": "query relayPageRepoQuery(\n  $userName: String!\n  $repoName: String!\n) {\n  repo(ownerUsername: $userName, name: $repoName) {\n    ...UserRepo_repo_3KzBEb\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n    associatedPullRequests {\n      ...PullRequestInfo_pullRequest\n    }\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n    avatar_url\n  }\n}\n\nfragment PullRequestInfo_pullRequest on PullRequest {\n  title\n  number\n  url\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n  }\n}\n\nfragment UserRepo_repo_3KzBEb on GithubRepo {\n  ...Repo_repo\n  ...BranchesTable_repo\n}\n"
  }
};
})();
(node as any).hash = '7520f5a2854b2c02852ef6129c66844a';
export default node;
