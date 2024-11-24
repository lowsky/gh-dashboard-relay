'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Flex, Heading, Icon, Link } from '@chakra-ui/react';

import { Maybe } from 'restinpeace/types';
import { useUserRepo } from './useUserRepoFromRoute';

export interface OwnerType {
    login?: string;
}

export interface RepoType {
    owner?: Maybe<OwnerType>;
    name?: string;
}

export interface RepoProps {
    repo?: RepoType;
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
    const { userName, repoName } = useUserRepo();

    const login = repo?.owner?.login ?? userName ?? 'unknown';
    const name = repo?.name ?? repoName ?? 'unknown';

    return (
        <Flex align="center" gap={4}>
            {
                // @ts-expect-error variant does not exist
                <Heading as="h1" variant="grey" size="lg" margin={0}>
                    Repository
                </Heading>
            }
            <Heading as="h2" size="md" margin={0}>
                <Link href={`https://github.com/${login}/${name}`} rel="noopener noreferrer nofollow">
                    <strong>
                        {login} / {name}
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
