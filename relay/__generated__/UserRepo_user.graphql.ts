/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserRepo_user = {
    readonly " $fragmentRefs": FragmentRefs<"User_user">;
    readonly " $refType": "UserRepo_user";
};
export type UserRepo_user$data = UserRepo_user;
export type UserRepo_user$key = {
    readonly " $data"?: UserRepo_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserRepo_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "lowsky",
      "kind": "LocalArgument",
      "name": "userName"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRepo_user",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "User_user"
    }
  ],
  "type": "GithubUser",
  "abstractKey": null
};
(node as any).hash = 'd04a7b52ec96ad9100acf4169d495e23';
export default node;
