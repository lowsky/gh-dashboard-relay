import PureBranchInfoRow from '../container/BranchInfoRow';
import RelayBranchInfoRow from '../relay/BranchInfoRow';

import PureBranchesTable from '../container/BranchesTable';
import RelayBranchesTable from '../relay/BranchesTable';

import PureCommitWithStatuses from './CommitWithStatuses';
import RelayCommitWithStatuses from '../relay/CommitWithStatuses';

import PureRepo from './Repo';
import RelayRepo from '../relay/Repo';

import PureUser from './User';
import RelayUser from '../relay/User';

export const UILibPureComponents = {
    User: PureUser,
    Repo: PureRepo,
    BranchTable: PureBranchesTable,
    BranchInfoRow: PureBranchInfoRow,
    CommitWithStatuses: PureCommitWithStatuses,
};

export const UILibWithRelaySupport = {
    User: RelayUser,
    Repo: RelayRepo,
    BranchTable: RelayBranchesTable,
    BranchInfoRow: RelayBranchInfoRow,
    CommitWithStatuses: RelayCommitWithStatuses,
};
