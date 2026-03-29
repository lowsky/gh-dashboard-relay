/**
 * @generated SignedSource<<fb9613c7cdd3a2249892c42bfe0a82ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFragment_user$data = {
  readonly avatarUrl: any;
  readonly company: string | null | undefined;
  readonly login: string;
  readonly " $fragmentType": "UserFragment_user";
};
export type UserFragment_user$key = {
  readonly " $data"?: UserFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFragment_user",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9c7c07b31727412d37936f29be979876";

export default node;
