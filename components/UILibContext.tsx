'use client';

import React, { useContext } from 'react';

import { UserProps } from './User';
import { RepoProps } from './Repo';
import { PullRequestInfoProps } from './PullRequestInfo';
import { CommitWithStatusesProps } from './CommitWithStatuses/CommitWithStatuses';
import { BranchesTableProps } from 'container/BranchesTable';
import { BranchInfoRowProps } from 'container/BranchInfoRow';

type WithOptionalRelay<Props> =
    | React.ComponentType<Props> //
    | React.ComponentType<Props & { relay?: string }>;

export interface UILib {
    User: WithOptionalRelay<UserProps>;
    Repo: WithOptionalRelay<RepoProps>;
    BranchesTable: WithOptionalRelay<BranchesTableProps>;
    BranchInfoRow: WithOptionalRelay<BranchInfoRowProps>;
    CommitWithStatuses: WithOptionalRelay<CommitWithStatusesProps>;
    PullRequestInfo: WithOptionalRelay<PullRequestInfoProps>;
}

/* Dummy components avoid crashes caused by undefined components */
export const UILibDummy: UILib = {
    User: () => null,
    Repo: () => null,
    BranchesTable: () => null,
    BranchInfoRow: () => null,
    CommitWithStatuses: () => null,
    PullRequestInfo: () => null,
};

/*
  To avoid cyclic dependency, we initialise the default context here with dummy
  values as default, instead of the real UILib variants (Pure/Relay)
  while this context is already imported by some of these components.
 */
const UILibContext = React.createContext<UILib>(UILibDummy);

export const UILib = UILibContext.Provider;
export default UILibContext;

export const useUILib = () => useContext<UILib>(UILibContext);
