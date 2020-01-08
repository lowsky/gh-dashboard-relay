/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Repo_repo = {
    readonly name: string | null;
    readonly owner: {
        readonly login: string | null;
    } | null;
    readonly " $refType": "Repo_repo";
};
export type Repo_repo$data = Repo_repo;
export type Repo_repo$key = {
    readonly " $data"?: Repo_repo$data;
    readonly " $fragmentRefs": FragmentRefs<"Repo_repo">;
};



const node: ReaderFragment = {
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
(node as any).hash = '48dd795de55f30c5bdef3d9f4ce6cea7';
export default node;
