/**
 * @generated SignedSource<<648fcccfc772a0e34cd1b21384dbb6b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoListFragment_repo$data = {
  readonly id: string;
  readonly isFork: boolean;
  readonly name: string;
  readonly nameWithOwner: string;
  readonly pullRequests: {
    readonly totalCount: number;
  };
  readonly url: any;
  readonly " $fragmentType": "RepoListFragment_repo";
};
export type RepoListFragment_repo$key = {
  readonly " $data"?: RepoListFragment_repo$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoListFragment_repo">;
};

import RepoBranchListPaginationQuery_graphql from './RepoBranchListPaginationQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepoBranchListPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RepoListFragment_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameWithOwner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFork",
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
      "name": "pullRequests",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "pullRequests(first:1,states:[\"OPEN\"])"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "1a9d0c4294c57bcfce310fcc08a4095c";

export default node;
