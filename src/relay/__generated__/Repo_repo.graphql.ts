/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Repo_repo$ref = any;
export type Repo_repo = {
    readonly name: string | null;
    readonly owner: {
        readonly login: string | null;
    } | null;
    readonly " $refType": Repo_repo$ref;
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
