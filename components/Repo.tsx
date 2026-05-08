'use client';

import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Heading, Icon, Link } from '@chakra-ui/react';

interface RepoProps {
    userName?: string;
    repoName?: string;
}

const Repo: FC<RepoProps> = ({ userName = 'unknown', repoName = 'unknown' }) => {
    return (
        <>
            <Heading>
                Repository {userName} / {repoName}
            </Heading>
            <Link href={`https://github.com/${userName}/${repoName}`} rel="noopener noreferrer nofollow">
                <Icon ml={1}>
                    <FontAwesomeIcon icon={faGithub} />
                </Icon>
                open in GitHub
            </Link>
        </>
    );
};

export default Repo;
