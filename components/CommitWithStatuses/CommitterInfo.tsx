import { Box, Image, Link } from '@chakra-ui/react';

import { GithubCommitAuthor, GithubUser, UserOrCommitAuthor } from 'restinpeace/types';

import styles from './CommitWithStatuses.module.css';

export function CommitterInfo({ author }) {
    if (!author) return null;

    return (
        <>
            <span>&nbsp;&nbsp;by&nbsp;</span>
            {isGithubUser(author) && (
                <Link href={`https://github.com/${author.login}`} rel="noopener noreferrer nofollow">
                    <Box display={'inline-flex'} alignItems={'center'}>
                        {author.avatar_url && (
                            <Image
                                display="inline-flex"
                                alignItems="center"
                                className={styles.committer}
                                borderRadius="full"
                                boxSize="32px"
                                alt="user avatar"
                                src={author.avatar_url}
                            />
                        )}
                        &nbsp;<span>{author.login}</span>
                    </Box>
                </Link>
            )}
            {isGithubCommitAuthor(author) && (
                <a href={'mailto:' + author.email} rel="noopener noreferrer nofollow">
                    {author.name ?? '?'}
                </a>
            )}
        </>
    );
}

function isGithubUser(author: UserOrCommitAuthor | undefined): author is GithubUser {
    return typeof (author as GithubUser)?.login !== 'undefined';
}
function isGithubCommitAuthor(author: UserOrCommitAuthor | undefined): author is GithubCommitAuthor {
    return typeof (author as GithubCommitAuthor)?.email !== 'undefined';
}
