/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Repo_repo$ref: FragmentReference;
declare export opaque type Repo_repo$fragmentType: Repo_repo$ref;
export type Repo_repo = {|
  +name: ?string,
  +owner: ?{|
    +login: ?string
  |},
  +$refType: Repo_repo$ref,
|};
export type Repo_repo$data = Repo_repo;
export type Repo_repo$key = {
  +$data?: Repo_repo$data,
  +$fragmentRefs: Repo_repo$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Repo_repo",
  "type": "GithubRepo",
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
      "name": "owner",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubUser",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "login",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '48dd795de55f30c5bdef3d9f4ce6cea7';
module.exports = node;
