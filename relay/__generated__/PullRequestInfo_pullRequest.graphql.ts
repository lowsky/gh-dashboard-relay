/**
 * @generated SignedSource<<7eff99355429f33bd284a4c6b45709a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PullRequestInfo_pullRequest$data = {
  readonly headRefOid: any;
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly url: any;
  readonly " $fragmentType": "PullRequestInfo_pullRequest";
};
export type PullRequestInfo_pullRequest$key = {
  readonly " $data"?: PullRequestInfo_pullRequest$data;
  readonly " $fragmentSpreads": FragmentRefs<"PullRequestInfo_pullRequest">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PullRequestInfo_pullRequest",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "name": "headRefOid",
      "storageKey": null
    }
  ],
  "type": "PullRequest",
  "abstractKey": null
};

(node as any).hash = "a4db669712822a32e610ea79a2566e53";

export default node;
