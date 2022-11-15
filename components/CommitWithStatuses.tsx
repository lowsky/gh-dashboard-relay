import React from 'react';
import { Image, Link } from '@chakra-ui/react';

import { GithubCommit, GithubCommitAuthor, GithubUser, UserOrCommitAuthor } from '../lib/types/resolvers';
import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';

import styles from './CommitWithStatuses.module.css';
import { Status } from './Status';

export interface CommitWithStatusProps {
    commit?: GithubCommit;
}

const CommitWithStatus: React.FC<CommitWithStatusProps> = ({ commit = {} }) => {
    const { author, sha, date = '-?-', message = '-?-', status = [] } = commit;

    function isGithubUser(author: UserOrCommitAuthor | undefined): author is GithubUser {
        return typeof (author as GithubUser)?.login !== 'undefined';
    }
    function isGithubCommitAuthor(author: UserOrCommitAuthor | undefined): author is GithubCommitAuthor {
        return typeof (author as GithubCommitAuthor)?.email !== 'undefined';
    }

    const githubCommit = `https://github.com/lowsky/dashboard/tree/${sha}`;

    let mainMessage = message?.split('\n\n', 1);

    return (
        <>
            <div>
                <Link href={githubCommit} rel="noopener noreferrer nofollow">
                    <strong>{mainMessage}</strong>
                </Link>
            </div>

            <div className={styles.status}>
                <i>{date}</i>
                {author && isGithubUser(author) && (
                    <>
                        <span>&nbsp;&nbsp;by&nbsp;</span>
                        <Link href={`https://github.com/${author.login}`} rel="noopener noreferrer nofollow">
                            {author.avatar_url && <Image className={styles.commit_avatar} src={author.avatar_url} />}
                            &nbsp;<span>{author.login}</span>
                        </Link>
                    </>
                )}
                {author && isGithubCommitAuthor(author) && (
                    <>
                        &nbsp;by&nbsp;
                        <a href={'mailto:' + author.email} rel="noopener noreferrer nofollow">
                            {author.name ?? '?'}
                        </a>
                    </>
                )}
            </div>
            <div className={styles.statusLine}>
                {status &&
                    removeExtraStatusesForSameContext(status) //
                        .map((status, idx) => <Status key={idx} {...status} />)}
            </div>
        </>
    );
};

export default CommitWithStatus;
