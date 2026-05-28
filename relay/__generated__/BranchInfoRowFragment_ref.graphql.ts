/**
 * @generated SignedSource<<b1b8e34a474effd2f67492c2f0f37bec>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BranchInfoRowFragment_ref$data = {
  readonly associatedPullRequests: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly pr: {
          readonly " $fragmentSpreads": FragmentRefs<"PullRequestMergeFragment_ref">;
        };
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly name: string;
  readonly target: {
    readonly commit: {
      readonly " $fragmentSpreads": FragmentRefs<"CommitWithStatuses_commit">;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "BranchInfoRowFragment_ref";
};
export type BranchInfoRowFragment_ref$key = {
  readonly " $data"?: BranchInfoRowFragment_ref$data;
  readonly " $fragmentSpreads": FragmentRefs<"BranchInfoRowFragment_ref">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchInfoRowFragment_ref",
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
          "fragment": {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommitWithStatuses_commit"
              }
            ],
            "type": "Commit",
            "abstractKey": null
          },
          "kind": "AliasedInlineFragmentSpread",
          "name": "commit"
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
                  "name": "id",
                  "storageKey": null
                },
                {
                  "fragment": {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "PullRequestMergeFragment_ref"
                      }
                    ],
                    "type": "PullRequest",
                    "abstractKey": null
                  },
                  "kind": "AliasedInlineFragmentSpread",
                  "name": "pr"
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

(node as any).hash = "97ab3924798d504ee5944eb2e6cf2ff1";

export default node;
