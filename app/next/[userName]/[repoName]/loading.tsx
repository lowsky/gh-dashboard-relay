import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Spinner } from 'components/Spinner';
import Repo from 'components/Repo';
import User from 'components/User';

export default function Loading({ userName, repoName }) {
    return (
        <Flex gap="4" direction="column">
            <Repo
                repo={{
                    name: repoName,
                }}
            />
            <User user={{ login: userName }} />
            <Spinner />
        </Flex>
    );
}
