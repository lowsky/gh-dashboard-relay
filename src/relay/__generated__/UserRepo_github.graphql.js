/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type UserRepo_github = {|
  +user: ?{| |};
  +repo: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRepo_github",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "username",
          "value": "lowsky",
          "type": "String!"
        }
      ],
      "concreteType": "GithubUser",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "User_user",
          "args": null
        }
      ],
      "storageKey": "user{\"username\":\"lowsky\"}"
    },
    {
      "kind": "LinkedField",
      "alias": null,
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
      "name": "repo",
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
      ],
      "storageKey": "repo{\"name\":\"dashboard\",\"ownerUsername\":\"lowsky\"}"
    }
  ],
  "type": "GithubAPI"
};

module.exports = fragment;
