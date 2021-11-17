/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserRepo_repo = {
    readonly " $fragmentRefs": FragmentRefs<"Repo_repo" | "BranchesTable_repo">;
    readonly " $refType": "UserRepo_repo";
};
export type UserRepo_repo$data = UserRepo_repo;
export type UserRepo_repo$key = {
    readonly " $data"?: UserRepo_repo$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserRepo_repo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "dashboard",
      "kind": "LocalArgument",
      "name": "name"
    },
    {
      "defaultValue": "lowsky",
      "kind": "LocalArgument",
      "name": "ownerUsername"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRepo_repo",
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
  "type": "GithubRepo",
  "abstractKey": null
};
(node as any).hash = '5f639afe230a5fee7d7db096050d8506';
export default node;
