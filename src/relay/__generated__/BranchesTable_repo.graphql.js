/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BranchInfoRow_branch$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BranchesTable_repo$ref: FragmentReference;
export type BranchesTable_repo = {|
  +branches: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BranchInfoRow_branch$ref
  |}>,
  +$refType: BranchesTable_repo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
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
