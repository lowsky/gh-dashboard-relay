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
    } | null> | null;
    readonly " $refType": "CommitWithStatuses_commit";
};
export type CommitWithStatuses_commit$data = CommitWithStatuses_commit;
export type CommitWithStatuses_commit$key = {
    readonly " $data"?: CommitWithStatuses_commit$data;
    readonly " $fragmentRefs": FragmentRefs<"CommitWithStatuses_commit">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CommitWithStatuses_commit",
  "type": "GithubCommit",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sha",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "message",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "status",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubStatus",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "context",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "state",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "target_url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "updated_at",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'cf04016c8a60d1891fa2db687cc186f9';
export default node;
