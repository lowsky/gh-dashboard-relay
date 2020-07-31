/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommitWithStatuses_commit = {
    readonly sha: string | null;
    readonly message: string | null;
    readonly date: string | null;
    readonly status: ReadonlyArray<{
        readonly context: string | null;
        readonly description: string | null;
        readonly state: string | null;
        readonly target_url: string | null;
        readonly updated_at: string | null;
        readonly avatar_url: string | null;
    } | null> | null;
    readonly " $refType": "CommitWithStatuses_commit";
};
export type CommitWithStatuses_commit$data = CommitWithStatuses_commit;
export type CommitWithStatuses_commit$key = {
    readonly " $data"?: CommitWithStatuses_commit$data;
    readonly " $fragmentRefs": FragmentRefs<"CommitWithStatuses_commit">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommitWithStatuses_commit",
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
    }
  ],
  "type": "GithubCommit",
  "abstractKey": null
};
(node as any).hash = '0a23222cea2c4545dc4b5539933a7883';
export default node;
