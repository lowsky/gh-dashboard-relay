'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Flex, Heading, Icon, Link } from '@chakra-ui/react';

export type Maybe<T> = T | null;

export interface OwnerType {
    login?: string;
}

export interface RepoType {
    owner?: Maybe<OwnerType>;
    name?: string;
}

export interface RepoProps {
    userName?: string;
    repoName?: string;
}

const Repo: React.FC<RepoProps> = ({ userName = 'unknown', repoName = 'unknown' }) => {
    return (
        <Flex align="center" gap={4}>
            {
                // @ts-expect-error variant does not exist
                <Heading as="h1" variant="grey" size="lg" margin={0}>
                    Repository
                </Heading>
            }
            <Heading as="h2" size="md" margin={0}>
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
