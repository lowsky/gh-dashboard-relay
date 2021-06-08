/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BranchInfoRow_branch = {
    readonly name: string;
    readonly lastCommit: {
        readonly associatedPullRequests: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"PullRequestInfo_pullRequest">;
        } | null> | null;
        readonly " $fragmentRefs": FragmentRefs<"CommitWithStatuses_commit">;
    } | null;
    readonly " $refType": "BranchInfoRow_branch";
};
export type BranchInfoRow_branch$data = BranchInfoRow_branch;
export type BranchInfoRow_branch$key = {
    readonly " $data"?: BranchInfoRow_branch$data;
    readonly " $fragmentRefs": FragmentRefs<"BranchInfoRow_branch">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchInfoRow_branch",
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
      "concreteType": "GithubCommit",
      "kind": "LinkedField",
      "name": "lastCommit",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PullRequest",
          "kind": "LinkedField",
          "name": "associatedPullRequests",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "PullRequestInfo_pullRequest"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommitWithStatuses_commit"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GithubBranch",
  "abstractKey": null
};
(node as any).hash = 'd5e0d3fa886bcbf2013204ef7fa963a8';
export default node;
