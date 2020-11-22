import React from 'react';

import { UserProps } from "./User";

const User: React.FC<UserProps> = () => null;

/* Dummy components avoids crashes caused by undefined components */
export const UILibDummy = {
           User,
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
