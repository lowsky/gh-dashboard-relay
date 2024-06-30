/**
 * @generated SignedSource<<cadeed4b10d1079059f5be97e663c5ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type Repo_repo$data = {
    readonly name: string | null | undefined;
    readonly owner:
        | {
              readonly login: string | null | undefined;
          }
        | null
        | undefined;
    readonly ' $fragmentType': 'Repo_repo';
};
export type Repo_repo$key = {
    readonly ' $data'?: Repo_repo$data;
    readonly ' $fragmentSpreads': FragmentRefs<'Repo_repo'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'Repo_repo',
    selections: [
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            concreteType: 'GithubUser',
            kind: 'LinkedField',
            name: 'owner',
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'login',
                    storageKey: null,
                },
            ],
            storageKey: null,
        },
    ],
    type: 'GithubRepo',
    abstractKey: null,
};

(node as any).hash = '48dd795de55f30c5bdef3d9f4ce6cea7';

export default node;
