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

import PurePullRequestInfo from './PullRequestInfo';
import RelayPullRequestInfo from '../relay/PullRequestInfo';

import { UILib } from './UILibContext';

export const UILibPureComponents: UILib = {
    User: PureUser,
    Repo: PureRepo,
    BranchTable: PureBranchesTable,
    BranchInfoRow: PureBranchInfoRow,
    CommitWithStatuses: PureCommitWithStatuses,
    PullRequestInfo: PurePullRequestInfo,
};

export const UILibWithRelaySupport: UILib = {
    // @ts-ignore
    User: RelayUser,
    // @ts-ignore
    Repo: RelayRepo,
    // @ts-ignore
    BranchTable: RelayBranchesTable,
    // @ts-ignore
    BranchInfoRow: RelayBranchInfoRow,
    // @ts-ignore
    CommitWithStatuses: RelayCommitWithStatuses,
    // @ts-ignore
    PullRequestInfo: RelayPullRequestInfo,
};
