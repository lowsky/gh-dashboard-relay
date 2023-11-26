import { UILib } from './UILibContext';

import RelayUser from 'relay/User';
import RelayRepo from 'relay/Repo';
import RelayBranchesTable from 'relay/BranchesTable';
import RelayBranchInfoRow from 'relay/BranchInfoRow';
import RelayCommitWithStatuses from 'relay/CommitWithStatuses';
import RelayPullRequestInfo from 'relay/PullRequestInfo';

export const UILibWithRelaySupport: UILib = {
    User: RelayUser,
    Repo: RelayRepo,
    BranchesTable: RelayBranchesTable,
    BranchInfoRow: RelayBranchInfoRow,
    CommitWithStatuses: RelayCommitWithStatuses,
    PullRequestInfo: RelayPullRequestInfo,
};
