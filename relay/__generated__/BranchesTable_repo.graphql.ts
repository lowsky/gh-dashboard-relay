/**
 * @generated SignedSource<<4cf5cfda58e416b5b5a23a936a7ebb38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BranchesTable_repo$data = {
    readonly branches:
        | ReadonlyArray<
              | {
                    readonly ' $fragmentSpreads': FragmentRefs<'BranchInfoRow_branch'>;
                }
              | null
              | undefined
          >
        | null
        | undefined;
    readonly ' $fragmentType': 'BranchesTable_repo';
};
export type BranchesTable_repo$key = {
    readonly ' $data'?: BranchesTable_repo$data;
    readonly ' $fragmentSpreads': FragmentRefs<'BranchesTable_repo'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'BranchesTable_repo',
    selections: [
        {
            alias: null,
            args: null,
            concreteType: 'GithubBranch',
            kind: 'LinkedField',
            name: 'branches',
            plural: true,
            selections: [
                {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'BranchInfoRow_branch',
                },
            ],
            storageKey: null,
        },
    ],
    type: 'GithubRepo',
    abstractKey: null,
};

(node as any).hash = '4c8bc807eb50da79f15d36da0098d3ef';

export default node;
