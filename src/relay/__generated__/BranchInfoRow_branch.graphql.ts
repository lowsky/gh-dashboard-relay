/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CommitWithStatuses_commit$ref = any;
export type BranchInfoRow_branch$ref = any;
export type BranchInfoRow_branch = {
    readonly name: string | null;
    readonly lastCommit: {
        readonly " $fragmentRefs": CommitWithStatuses_commit$ref;
    } | null;
    readonly " $refType": BranchInfoRow_branch$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BranchInfoRow_branch",
  "type": "GithubBranch",
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
      "name": "lastCommit",
      "storageKey": null,
      "args": null,
      "concreteType": "GithubCommit",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '63a94145a0e0c902e3ffeee712c071db';
export default node;
