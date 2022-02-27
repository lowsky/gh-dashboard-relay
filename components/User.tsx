import React from 'react';

import { Avatar, Heading } from '@chakra-ui/react';
import { CardContent } from './CardWithUserDetails/CardContent';
import { Card } from './CardWithUserDetails/Card';
export interface User {
    avatar_url?: string;
    company?: string;
    login?: string;
}

export interface UserProps {
    user?: User;
}

const User: React.FC<UserProps> = ({ user = {} }) => {
    const { avatar_url = '/octicon-git-branch.svg', login = '?', company } = user;

    return (
        <Card p={4} m={4}>
            <CardContent>
                <Avatar src={avatar_url} />
            </CardContent>
            <CardContent>
                <div>{login}</div>
                <div>{company}</div>
            </CardContent>
            <CardContent>
                <Heading fontSize="sm">{'Owner'}</Heading>
            </CardContent>
        </Card>
    );
};

export default User;
