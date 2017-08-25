/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type BranchInfoRow_branch = {|
  +name: ?string;
  +lastCommit: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchInfoRow_branch",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "GithubCommit",
      "name": "lastCommit",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubBranch"
};

module.exports = fragment;
