/**
 * @generated SignedSource<<41fb12623df5630c76e8d156cccc93a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PullRequestInfo_pullRequest$data = {
  readonly headRef: {
    readonly id: string;
  } | null | undefined;
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
      "concreteType": "Ref",
      "kind": "LinkedField",
      "name": "headRef",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PullRequest",
  "abstractKey": null
};

(node as any).hash = "9a56a094fa56a7936dfe1cf0e398f89b";

export default node;
