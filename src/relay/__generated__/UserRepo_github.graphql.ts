/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  "argumentDefinitions": [
    {
      "defaultValue": "dashboard",
      "kind": "LocalArgument",
      "name": "repoName"
    },
    {
      "defaultValue": "lowsky",
      "kind": "LocalArgument",
      "name": "userName"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRepo_github",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "username",
          "variableName": "userName"
        }
      ],
      "concreteType": "GithubUser",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "User_user"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
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
      "kind": "LinkedField",
      "name": "repo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Repo_repo"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BranchesTable_repo"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubAPI",
  "abstractKey": null
};
(node as any).hash = '14f1f0e0612dc24df5318bf178aaeee3';
export default node;
