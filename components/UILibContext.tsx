import React, { useContext } from 'react';

import { UserProps } from './User';
import { RepoProps } from './Repo';
import { PullRequestInfoProps } from './PullRequestInfo';
import { BranchesTableProps } from '../container/BranchesTable';
import { BranchInfoRowProps } from '../container/BranchInfoRow';
import { CommitWithStatusProps } from './CommitWithStatuses';

export interface UILib {
    User: React.ComponentType<UserProps> | React.ComponentType<UserProps & { relay?: string }>;
    Repo: React.ComponentType<RepoProps> | React.ComponentType<RepoProps & { relay?: string }>;
    BranchTable: React.ComponentType<BranchesTableProps> | React.ComponentType<BranchesTableProps & { relay?: string }>;
    BranchInfoRow:
        | React.ComponentType<BranchInfoRowProps>
        | React.ComponentType<BranchInfoRowProps & { relay?: string }>;
    CommitWithStatuses:
        | React.ComponentType<CommitWithStatusProps>
        | React.ComponentType<CommitWithStatusProps & { relay?: string }>;
    PullRequestInfo:
        | React.ComponentType<PullRequestInfoProps>
        | React.ComponentType<PullRequestInfoProps & { relay?: string }>;
}

/* Dummy components avoids crashes caused by undefined components */
export const UILibDummy: UILib = {
    User: () => null,
    Repo: () => null,
    BranchTable: () => null,
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

export default UILibContext;

export const useUILib = () => useContext<UILib>(UILibContext);
