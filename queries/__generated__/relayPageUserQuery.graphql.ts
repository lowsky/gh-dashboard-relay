/**
 * @generated SignedSource<<d48a5cc19200c26eb5d3c2c1af5026b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type relayPageUserQuery$variables = {
  userName: string;
};
export type relayPageUserQueryVariables = relayPageUserQuery$variables;
export type relayPageUserQuery$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"UserRepo_user">;
  } | null;
};
export type relayPageUserQueryResponse = relayPageUserQuery$data;
export type relayPageUserQuery = {
  variables: relayPageUserQueryVariables;
  response: relayPageUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userName"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "userName"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "relayPageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GithubUser",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserRepo_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "relayPageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GithubUser",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
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
            "name": "avatar_url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dd75d5baef75ef2361678125cb79b6f7",
    "id": null,
    "metadata": {},
    "name": "relayPageUserQuery",
    "operationKind": "query",
    "text": "query relayPageUserQuery(\n  $userName: String!\n) {\n  user(username: $userName) {\n    ...UserRepo_user\n  }\n}\n\nfragment UserRepo_user on GithubUser {\n  ...User_user\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n"
  }
};
})();

(node as any).hash = "fec89feb3f7efaa7c8ebbf058cb04224";

export default node;
