/**
 * @generated SignedSource<<06aa40ac805ff0830780062d957a02d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type StatusState = "ERROR" | "EXPECTED" | "FAILURE" | "PENDING" | "SUCCESS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CommitWithStatuses_commit$data = {
  readonly abbreviatedOid: string;
  readonly author: {
    readonly user: {
      readonly avatarUrl: any;
      readonly login: string;
      readonly name: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly authoredDate: any;
  readonly commitUrl: any;
  readonly message: string;
  readonly oid: any;
  readonly status: {
    readonly commit: {
      readonly oid: any;
    } | null | undefined;
    readonly contexts: ReadonlyArray<{
      readonly avatarUrl: any | null | undefined;
      readonly context: string;
      readonly creator: {
        readonly login: string;
      } | null | undefined;
      readonly description: string | null | undefined;
      readonly state: StatusState;
      readonly targetUrl: any | null | undefined;
    }>;
    readonly id: string;
    readonly state: StatusState;
  } | null | undefined;
  readonly " $fragmentType": "CommitWithStatuses_commit";
};
export type CommitWithStatuses_commit$key = {
  readonly " $data"?: CommitWithStatuses_commit$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommitWithStatuses_commit">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oid",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommitWithStatuses_commit",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "authoredDate",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Status",
      "kind": "LinkedField",
      "name": "status",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Commit",
          "kind": "LinkedField",
          "name": "commit",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "StatusContext",
          "kind": "LinkedField",
          "name": "contexts",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "context",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "creator",
              "plural": false,
              "selections": [
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "targetUrl",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commitUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "abbreviatedOid",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GitActor",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
};
})();

(node as any).hash = "b80c1413ff98373c2b34508d7a31edec";

export default node;
