/**
 * @generated SignedSource<<88c6de96763bdfd37bf2955f72eac7ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MergeStateStatus = "BEHIND" | "BLOCKED" | "CLEAN" | "DIRTY" | "DRAFT" | "HAS_HOOKS" | "UNKNOWN" | "UNSTABLE" | "%future added value";
export type MergeableState = "CONFLICTING" | "MERGEABLE" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PullRequestMergeFragment_ref$data = {
  readonly closed: boolean;
  readonly headRefOid: any;
  readonly isDraft: boolean;
  readonly isInMergeQueue: boolean;
  readonly locked: boolean;
  readonly mergeStateStatus: MergeStateStatus;
  readonly mergeable: MergeableState;
  readonly merged: boolean;
  readonly number: number;
  readonly title: string;
  readonly url: any;
  readonly " $fragmentType": "PullRequestMergeFragment_ref";
};
export type PullRequestMergeFragment_ref$key = {
  readonly " $data"?: PullRequestMergeFragment_ref$data;
  readonly " $fragmentSpreads": FragmentRefs<"PullRequestMergeFragment_ref">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PullRequestMergeFragment_ref",
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
    }
  ],
  "type": "PullRequest",
  "abstractKey": null
};

(node as any).hash = "16884fa2062ef9f7b01e6688ada249f3";

export default node;
