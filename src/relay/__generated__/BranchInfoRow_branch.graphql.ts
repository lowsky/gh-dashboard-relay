/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BranchInfoRow_branch = {
    readonly name: string | null;
    readonly lastCommit: {
        readonly " $fragmentRefs": FragmentRefs<"CommitWithStatuses_commit">;
    } | null;
    readonly " $refType": "BranchInfoRow_branch";
};
export type BranchInfoRow_branch$data = BranchInfoRow_branch;
export type BranchInfoRow_branch$key = {
    readonly " $data"?: BranchInfoRow_branch$data;
    readonly " $fragmentRefs": FragmentRefs<"BranchInfoRow_branch">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchInfoRow_branch",
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
      "concreteType": "GithubCommit",
      "kind": "LinkedField",
      "name": "lastCommit",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubBranch"
};
(node as any).hash = '63a94145a0e0c902e3ffeee712c071db';
export default node;
