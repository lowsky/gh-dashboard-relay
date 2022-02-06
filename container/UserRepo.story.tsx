import UILibContext from '../components/UILibContext';
import UserRepo from '../container/UserRepo';

import { UILibPureComponents } from '../components';
import { WithAvatar } from '../components/User.story';
import { FakeData } from '../components/Repo.story';

export default {
    title: 'Others/UserRepo',
    component: UserRepo,
};

export const WithUserAndRepo = (props) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <UserRepo {...props} />
    </UILibContext.Provider>
);

WithUserAndRepo.args = {
    user: WithAvatar.args.user,
    repo: { ...FakeData.args.repo },
};
