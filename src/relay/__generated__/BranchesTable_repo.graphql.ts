/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type BranchInfoRow_branch$ref = any;
export type BranchesTable_repo$ref = any;
export type BranchesTable_repo = {
    readonly branches: ReadonlyArray<{
        readonly " $fragmentRefs": BranchInfoRow_branch$ref;
    } | null> | null;
    readonly " $refType": BranchesTable_repo$ref;
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
