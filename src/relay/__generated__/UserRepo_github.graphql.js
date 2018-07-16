/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BranchesTable_repo$ref = any;
type Repo_repo$ref = any;
type User_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserRepo_github$ref: FragmentReference;
export type UserRepo_github = {|
  +user: ?{|
    +$fragmentRefs: User_user$ref
  |},
  +repo: ?{|
    +$fragmentRefs: Repo_repo$ref & BranchesTable_repo$ref
  |},
  +$refType: UserRepo_github$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "UserRepo_github",
  "type": "GithubAPI",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": "user(username:\"lowsky\")",
      "args": [
        {
          "kind": "Literal",
          "name": "username",
          "value": "lowsky",
          "type": "String!"
        }
      ],
      "concreteType": "GithubUser",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "User_user",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "repo",
      "storageKey": "repo(name:\"dashboard\",ownerUsername:\"lowsky\")",
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "dashboard",
          "type": "String!"
        },
        {
          "kind": "Literal",
          "name": "ownerUsername",
          "value": "lowsky",
          "type": "String!"
        }
      ],
      "concreteType": "GithubRepo",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Repo_repo",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BranchesTable_repo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '76b766f8d7d9a862ad7fe1874cef0d9b';
module.exports = node;
