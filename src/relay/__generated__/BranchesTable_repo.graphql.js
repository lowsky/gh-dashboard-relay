/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type BranchesTable_repo = {|
  +branches: ?$ReadOnlyArray<?{| |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchesTable_repo",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "GithubBranch",
      "name": "branches",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BranchInfoRow_branch",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubRepo"
};

module.exports = fragment;
