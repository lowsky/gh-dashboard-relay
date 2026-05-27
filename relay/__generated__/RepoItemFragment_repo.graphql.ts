/**
 * @generated SignedSource<<9b6d8a074329017b4fd37360dcb785ad>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoItemFragment_repo$data = {
  readonly id: string;
  readonly isFork: boolean;
  readonly name: string;
  readonly nameWithOwner: string;
  readonly pullRequests: {
    readonly totalCount: number;
  };
  readonly url: any;
  readonly " $fragmentType": "RepoItemFragment_repo";
};
export type RepoItemFragment_repo$key = {
  readonly " $data"?: RepoItemFragment_repo$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoItemFragment_repo">;
};

import RepoItemRefetchFragment_graphql from './RepoItemRefetchFragment.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepoItemRefetchFragment_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RepoItemFragment_repo",
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

(node as any).hash = "cb35e44231761c3f3eae507791fa4336";

export default node;
