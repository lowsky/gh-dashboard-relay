/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CommitWithStatuses_commit$ref: FragmentReference;
declare export opaque type CommitWithStatuses_commit$fragmentType: CommitWithStatuses_commit$ref;
export type CommitWithStatuses_commit = {|
  +sha: ?string,
  +message: ?string,
  +date: ?string,
  +status: ?$ReadOnlyArray<?{|
    +context: ?string,
    +description: ?string,
    +state: ?string,
    +target_url: ?string,
    +updated_at: ?string,
  |}>,
  +$refType: CommitWithStatuses_commit$ref,
|};
export type CommitWithStatuses_commit$data = CommitWithStatuses_commit;
export type CommitWithStatuses_commit$key = {
  +$data?: CommitWithStatuses_commit$data,
  +$fragmentRefs: CommitWithStatuses_commit$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CommitWithStatuses_commit",
  "type": "GithubCommit",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sha",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "message",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "status",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubStatus",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "context",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "state",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "target_url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "updated_at",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cf04016c8a60d1891fa2db687cc186f9';
module.exports = node;
