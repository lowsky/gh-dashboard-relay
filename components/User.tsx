import { Avatar } from 'components/ui/avatar';

import { Heading, Box, Strong, Text, HStack } from '@chakra-ui/react';

interface UserType {
    avatarUrl?: string;
    company?: string | null;
    login?: string;
}

interface UserProps {
    user: Readonly<UserType>;
}

const User: React.FC<UserProps> = ({ user = {} }) => {
    const { avatarUrl, login, company } = user;

    return (
        <HStack align="center" gap={4}>
            <Heading as="h3">Owner</Heading>
            <Avatar src={avatarUrl} size="xl" name="owner avatar" />
            <Box>
                <Strong>{login ?? '?'}</Strong>
                <Text>{company}</Text>
            </Box>
        </HStack>
    );
};

export default User;
