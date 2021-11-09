/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type relayPageUserQueryVariables = {
    userName: string;
};
export type relayPageUserQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserRepo_user">;
    } | null;
};
export type relayPageUserQuery = {
    readonly response: relayPageUserQueryResponse;
    readonly variables: relayPageUserQueryVariables;
};



/*
query relayPageUserQuery(
  $userName: String!
) {
  user(username: $userName) {
    ...UserRepo_user_1blzqb
  }
}

fragment UserRepo_user_1blzqb on GithubUser {
  ...User_user
}

fragment User_user on GithubUser {
  login
  company
  avatar_url
}
*/

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
            "args": [
              {
                "kind": "Variable",
                "name": "userName",
                "variableName": "userName"
              }
            ],
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
    "cacheID": "3bcf2239e918913cf06bf05f9273bb54",
    "id": null,
    "metadata": {},
    "name": "relayPageUserQuery",
    "operationKind": "query",
    "text": "query relayPageUserQuery(\n  $userName: String!\n) {\n  user(username: $userName) {\n    ...UserRepo_user_1blzqb\n  }\n}\n\nfragment UserRepo_user_1blzqb on GithubUser {\n  ...User_user\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n"
  }
};
})();
(node as any).hash = 'e3d22827560647b53b2974be4e1f3cc4';
export default node;
