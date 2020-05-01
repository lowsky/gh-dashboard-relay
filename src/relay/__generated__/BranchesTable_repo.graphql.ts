/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BranchesTable_repo = {
    readonly branches: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"BranchInfoRow_branch">;
    } | null> | null;
    readonly " $refType": "BranchesTable_repo";
};
export type BranchesTable_repo$data = BranchesTable_repo;
export type BranchesTable_repo$key = {
    readonly " $data"?: BranchesTable_repo$data;
    readonly " $fragmentRefs": FragmentRefs<"BranchesTable_repo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchesTable_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GithubBranch",
      "kind": "LinkedField",
      "name": "branches",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BranchInfoRow_branch"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubRepo"
};
(node as any).hash = '4c8bc807eb50da79f15d36da0098d3ef';
export default node;
