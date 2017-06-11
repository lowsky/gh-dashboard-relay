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

function checkProps(props) {
    return props.relay;
}

const createUser = props => createRelayOrPureComponent(RelayUser, PureUser, props);

const createRelayOrPureComponent = (relayComponent, pureComp, props) => {
    if (checkProps(props)) {
        return relayComponent;
    }
    return pureComp;
};

export default {
    createUser,
    createRepo: props => createRelayOrPureComponent(RelayRepo, PureRepo, props),
    createBranchTable: props => createRelayOrPureComponent(RelayBranchesTable, PureBranchesTable, props),
    createBranchInfoRow: props => createRelayOrPureComponent(RelayBranchInfoRow, PureBranchInfoRow, props),
    createCommitWithStatuses: props =>
        createRelayOrPureComponent(RelayCommitWithStatuses, PureCommitWithStatuses, props),
};
