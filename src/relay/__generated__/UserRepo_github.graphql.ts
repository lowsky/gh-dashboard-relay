/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserRepo_github = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    } | null;
    readonly repo: {
        readonly " $fragmentRefs": FragmentRefs<"Repo_repo" | "BranchesTable_repo">;
    } | null;
    readonly " $refType": "UserRepo_github";
};
export type UserRepo_github$data = UserRepo_github;
export type UserRepo_github$key = {
    readonly " $data"?: UserRepo_github$data;
    readonly " $fragmentRefs": FragmentRefs<"UserRepo_github">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserRepo_github",
  "type": "GithubAPI",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "userName",
      "type": "String",
      "defaultValue": "lowsky"
    },
    {
      "kind": "LocalArgument",
      "name": "repoName",
      "type": "String",
      "defaultValue": "dashboard"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "username",
          "variableName": "userName"
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
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "name",
          "variableName": "repoName"
        },
        {
          "kind": "Variable",
          "name": "ownerUsername",
          "variableName": "userName"
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
(node as any).hash = '14f1f0e0612dc24df5318bf178aaeee3';
export default node;
