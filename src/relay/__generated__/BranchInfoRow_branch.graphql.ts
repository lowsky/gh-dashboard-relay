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
  "kind": "Fragment",
  "name": "BranchInfoRow_branch",
  "type": "GithubBranch",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lastCommit",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubCommit",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '63a94145a0e0c902e3ffeee712c071db';
export default node;
