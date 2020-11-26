import React from 'react';

import { UserProps } from './User';
import { RepoProps } from './Repo';
import { BranchesTableProps } from '../container/BranchesTable';
import { BranchInfoRowProps } from '../container/BranchInfoRow';
import { CommitWithStatusProps } from './CommitWithStatuses';

export interface UILib {
  User: React.FC<UserProps>;
  Repo: React.FC<RepoProps>;
  BranchTable: React.FC<BranchesTableProps>;
  BranchInfoRow: React.FC<BranchInfoRowProps>;
  CommitWithStatuses: React.FC<CommitWithStatusProps>;
}

/* Dummy components avoids crashes caused by undefined components */
export const UILibDummy : UILib = {
   User: () => null,
   Repo: () => null,
   BranchTable: () => null,
   BranchInfoRow: () => null,
   CommitWithStatuses: () => null,
};

/*
  To avoid cyclic dependency, we initialise the default context here with dummy
  values as default, instead of the real UILib variants (Pure/Relay)
  while this context is already imported by some of these components.
 */
export default React.createContext(UILibDummy);
