/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CommitWithStatuses_commit$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BranchInfoRow_branch$ref: FragmentReference;
export type BranchInfoRow_branch = {|
  +name: ?string,
  +lastCommit: ?{|
    +$fragmentRefs: CommitWithStatuses_commit$ref
  |},
  +$refType: BranchInfoRow_branch$ref,
|};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '63a94145a0e0c902e3ffeee712c071db';
module.exports = node;
