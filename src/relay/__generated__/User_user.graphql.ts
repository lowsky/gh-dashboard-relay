/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type User_user$ref = any;
export type User_user = {
    readonly login: string | null;
    readonly company: string | null;
    readonly avatar_url: string | null;
    readonly " $refType": User_user$ref;
};



const node: ReaderFragment = {
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
(node as any).hash = '3c8e54b55d329d4240245369a0c42524';
export default node;
