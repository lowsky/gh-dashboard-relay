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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repo_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GithubUser",
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "login",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubRepo",
  "abstractKey": null
};
(node as any).hash = '48dd795de55f30c5bdef3d9f4ce6cea7';
export default node;
