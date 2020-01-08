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
  "kind": "Fragment",
  "name": "BranchesTable_repo",
  "type": "GithubRepo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "branches",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubBranch",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BranchInfoRow_branch",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '4c8bc807eb50da79f15d36da0098d3ef';
export default node;
