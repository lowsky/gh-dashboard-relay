import React from 'react';

import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react';

export interface User {
    avatar_url?: string;
    company?: string;
    login?: string;
}

export interface UserProps {
    user: Readonly<User>;
}

const User: React.FC<UserProps> = ({ user = {} }) => {
    const { avatar_url = '/octicon-git-branch.svg', login = '?', company } = user;

    return (
        <VStack align="start">
            <Flex gap="1rem" alignItems="center">
                <Avatar src={avatar_url} />
                <Box>
                    <Text>{login}</Text>
                    <div>{company}</div>
                </Box>
            </Flex>
            <div>Owner</div>
        </VStack>
    );
};

export default User;
