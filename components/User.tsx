import React from 'react';

import { Avatar, Heading, Box, Flex, Text, HStack } from '@chakra-ui/react';

export interface UserType {
    avatar_url?: string;
    company?: string;
    login?: string;
}

export interface UserProps {
    user: Readonly<UserType>;
}

const User: React.FC<UserProps> = ({ user = {} }) => {
    const { avatar_url = '/octicon-git-branch.svg', login = '?', company } = user;

    return (
        <HStack align="center">
            <Flex gap="1rem" alignItems="center">
                <Heading as="h3" size="sm">
                    Owner
                </Heading>
                <Avatar src={avatar_url} />
                <Box>
                    <Text>{login}</Text>
                    <i>{company}</i>
                </Box>
            </Flex>
        </HStack>
    );
};

export default User;
