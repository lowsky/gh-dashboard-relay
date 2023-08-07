import { UILib } from "./UILibContext";

import PureUser from "./User";
import PureRepo from "./Repo";
import PureBranchesTable from "../container/BranchesTable";
import PureBranchInfoRow from "../container/BranchInfoRow";
import PureCommitWithStatuses from "./CommitWithStatuses/CommitWithStatuses";
import PurePullRequestInfo from "./PullRequestInfo";

export const UILibPureComponents: UILib = {
  User: PureUser,
  Repo: PureRepo,
  BranchesTable: PureBranchesTable,
  BranchInfoRow: PureBranchInfoRow,
  CommitWithStatuses: PureCommitWithStatuses,
  PullRequestInfo: PurePullRequestInfo
};