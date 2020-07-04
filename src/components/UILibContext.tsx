import React from 'react';

/* Dummy components avoids crashes caused by undefined components */
export const UILibDummy = {
    User: () => false,
    Repo: () => false,
    BranchTable: () => false,
    BranchInfoRow: () => false,
    CommitWithStatuses: () => false,
};

/*
  To avoid cyclic dependency, we initialise the default context here with dummy
  values as default, instead of the real UILib variants (Pure/Relay)
  while this context is already imported by some of these components.
 */
export default React.createContext(UILibDummy);
