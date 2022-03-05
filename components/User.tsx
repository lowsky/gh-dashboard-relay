import React from 'react';

import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
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
        <Flex flexDirection="column" gap="1rem" p="1rem">
            <Flex gap="1rem" alignItems="center">
                <Avatar src={avatar_url} />
                <Box>
                    <Text>{login}</Text>
                    <div>{company}</div>
                </Box>
            </Flex>
            <div>Owner</div>
        </Flex>
    );
};

export default User;
