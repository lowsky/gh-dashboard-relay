import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Heading, Icon, Link } from '@chakra-ui/react';

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
        <Box>
            <Heading as="h1" variant="grey" size="lg">
                Repository
            </Heading>
            <Heading as="h2" size="md">
                <Link href={`https://github.com/${login}/${name}`} rel="noopener noreferrer nofollow">
                    <strong>
                        {login} / {name}
                    </strong>
                    <Icon ml={1}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Icon>
                </Link>
            </Heading>
        </Box>
    );
};

export default Repo;
