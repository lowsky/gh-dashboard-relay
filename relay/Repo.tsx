'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { FC } from 'react';

interface RepoProps {
    userName?: string;
    repoName?: string;
}

const Repo: FC<RepoProps> = ({ userName = 'unknown', repoName = 'unknown' }) => {
    return (
        <Flex align="center" gap={1}>
            <Heading>Repository</Heading>
            <Heading>
                <Link href={`https://github.com/${userName}/${repoName}`} rel="noopener noreferrer nofollow">
                    <strong>
                        {userName} / {repoName}
                    </strong>
                    <Icon ml={1}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Icon>
                </Link>
            </Heading>
        </Flex>
    );
};

export default Repo;
