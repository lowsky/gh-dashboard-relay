import UILibContext from '../components/UILibContext';
import UserRepo from '../container/UserRepo';

import { UILibPureComponents } from '../components';
import { userWithAvatar } from '../components/User.story';
import { repo_data } from '../components/Repo.story';

const userRepo = {
    user: userWithAvatar,
    repo: repo_data,
};

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
    ...userRepo,
};
