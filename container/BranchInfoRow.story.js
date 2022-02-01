import React from 'react';
import { Table, Tbody, Td, Tr } from '@chakra-ui/react';

import UILibContext from '../components/UILibContext';
import BranchInfoRow from '../container/BranchInfoRow';
import { UILibPureComponents } from '../components';

const userWithoutAvatar = {
    login: 'login',
    id: '1234',
    company: 'company',
};
const userWithAvatar = {
    ...userWithoutAvatar,
    avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
};

const commitData = {
    user: {
        ...userWithoutAvatar,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
    commit: {
        sha: 'no-sha',
        date: 'no-date',
        message: 'no-message',
        status: [],
        author: {
            ...userWithAvatar.user,
            email: 'me@work',
            name: 'My-Name',
        },
    },
};

const branchInfo = {
    branch: {
        name: 'branch-x',
        lastCommit: {
            //
            ...commitData.commit,
            associatedPullRequests: [
                {
                    title: 'title',
                    number: 42,
                    url: 'url',
                },
            ],
        },
    },
};

export default {
    title: 'Others/BranchInfoRow',
    component: BranchInfoRow,
};

export const WithInfo = (props) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <Table width={400}>
            <Tbody>
                <BranchInfoRow {...props} />
            </Tbody>
        </Table>
    </UILibContext.Provider>
);
WithInfo.args = { ...branchInfo };
