/**
 * @generated SignedSource<<021afcf49b5ce7c8652b1dc33b844649>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MergeableState = "CONFLICTING" | "MERGEABLE" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type BranchInfoRow_ref$data = {
  readonly associatedPullRequests: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly closed: boolean;
        readonly headRefOid: any;
        readonly locked: boolean;
        readonly mergeable: MergeableState;
        readonly merged: boolean;
        readonly number: number;
        readonly title: string;
        readonly url: any;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly name: string;
  readonly target: {
    readonly " $fragmentSpreads": FragmentRefs<"CommitWithStatuses_commit">;
  } | null | undefined;
  readonly " $fragmentType": "BranchInfoRow_ref";
};
export type BranchInfoRow_ref$key = {
  readonly " $data"?: BranchInfoRow_ref$data;
  readonly " $fragmentSpreads": FragmentRefs<"BranchInfoRow_ref">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchInfoRow_ref",
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "target",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit"
        }
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
                  "name": "closed",
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
};

(node as any).hash = "5a0406fe149b61a69ab0c973928a033d";

export default node;
