import { Image, Link } from '@chakra-ui/react';

import { GithubCommitAuthor, GithubUser, UserOrCommitAuthor } from '../restinpeace/types';

import styles from './CommitWithStatuses.module.css';

export function CommitterInfo({ author }) {
    if (!author) return null;

    return (
        <>
            <span>&nbsp;&nbsp;by&nbsp;</span>
            {isGithubUser(author) && (
                <Link href={`https://github.com/${author.login}`} rel="noopener noreferrer nofollow">
                    {author.avatar_url && <Image className={styles.commit_avatar} src={author.avatar_url} />}
                    &nbsp;<span>{author.login}</span>
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
