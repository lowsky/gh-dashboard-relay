import React from 'react';
import { Avatar } from './ui/avatar';

import { Heading, Box, Text, HStack } from '@chakra-ui/react';

export interface UserType {
    avatar_url?: string;
    company?: string | null;
    login?: string;
}

export interface UserProps {
    user: Readonly<UserType>;
}

const User: React.FC<UserProps> = ({ user = {} }) => {
    const { avatar_url, login, company } = user;

    return (
        <HStack align="center" gap={4}>
            <Heading as="h3" size="sm">
                Owner
            </Heading>
            <Avatar src={avatar_url} size="xl" />
            <Box>
                <Text>{login ?? '?'}</Text>
                <i>{company}</i>
            </Box>
        </HStack>
    );
};

export default User;
