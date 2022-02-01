import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Box, Heading, Icon, Link } from '@chakra-ui/react';

export interface OwnerType {
    login?: string;
}

interface RepoType {
    owner?: OwnerType;
    name?: string;
}

export interface RepoProps {
    repo?: RepoType;
}

const Repo: React.FC<RepoProps> = ({ repo: { name = '?', owner = {} } = {} }) => {
    return (
        <Box>
            <Heading as="h1" size={'lg'}>
                Repository
            </Heading>
            <Heading as="h3" size={'md'}>
                <Link href={`https://github.com/${owner.login}/${name}`} rel="noopener noreferrer nofollow">
                    <strong>
                        {owner && owner.login} / {name}
                    </strong>
                    <Icon>
                        <FontAwesomeIcon icon={faGithub as IconProp} />
                    </Icon>
                </Link>
            </Heading>
        </Box>
    );
};

export default Repo;
