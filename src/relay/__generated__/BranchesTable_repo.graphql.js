/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BranchInfoRow_branch$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BranchesTable_repo$ref: FragmentReference;
declare export opaque type BranchesTable_repo$fragmentType: BranchesTable_repo$ref;
export type BranchesTable_repo = {|
  +branches: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BranchInfoRow_branch$ref
  |}>,
  +$refType: BranchesTable_repo$ref,
|};
export type BranchesTable_repo$data = BranchesTable_repo;
export type BranchesTable_repo$key = {
  +$data?: BranchesTable_repo$data,
  +$fragmentRefs: BranchesTable_repo$ref,
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '4c8bc807eb50da79f15d36da0098d3ef';
module.exports = node;
