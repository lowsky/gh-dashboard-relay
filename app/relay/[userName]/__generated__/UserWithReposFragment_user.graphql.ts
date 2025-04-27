/**
 * @generated SignedSource<<2bfee1dc3d4ba9b3236192a9e0aa84b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserWithReposFragment_user$data = {
  readonly avatarUrl: any;
  readonly company: string | null | undefined;
  readonly login: string;
  readonly " $fragmentSpreads": FragmentRefs<"RepoListFragment_user" | "UserFragment_user">;
  readonly " $fragmentType": "UserWithReposFragment_user";
};
export type UserWithReposFragment_user$key = {
  readonly " $data"?: UserWithReposFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserWithReposFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserWithReposFragment_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "company",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserFragment_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RepoListFragment_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "42581b7d535546dbc814dc5c2478d1df";

export default node;
