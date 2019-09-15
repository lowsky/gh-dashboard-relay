/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
declare export opaque type User_user$fragmentType: User_user$ref;
export type User_user = {|
  +login: ?string,
  +company: ?string,
  +avatar_url: ?string,
  +$refType: User_user$ref,
|};
export type User_user$data = User_user;
export type User_user$key = {
  +$data?: User_user$data,
  +$fragmentRefs: User_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "User_user",
  "type": "GithubUser",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "login",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "company",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatar_url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3c8e54b55d329d4240245369a0c42524';
module.exports = node;
