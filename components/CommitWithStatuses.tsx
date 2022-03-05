import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Avatar, Image, Link } from '@chakra-ui/react';

import { GithubCommit, GithubCommitAuthor, GithubUser, Maybe, UserOrCommitAuthor } from '../lib/types/resolvers';
import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';

import styles from './CommitWithStatuses.module.css';

function icon4context(context, avatar_url?: Maybe<string>) {
    if (avatar_url) {
        return <Avatar className={styles.contextLogo} w={6} h={6} src={avatar_url} />;
    }
    return <span>{context ?? '-?-'}</span>;
}

function icon4status(status: 'success' | 'pending' | 'failure' | 'error' | any) {
    const style = {
        color: status2color(status),
        verticalAlign: 'top',
    };
    if (status === 'success') {
        return <FontAwesomeIcon style={style} icon={faCheckCircle as IconProp} />;
    }
    if (status === 'pending') {
        return <FontAwesomeIcon style={style} icon={faHourglass as IconProp} />;
    }
    if (status === 'failure') {
        return <FontAwesomeIcon style={style} icon={faExclamationCircle as IconProp} />;
    }
    if (status === 'error') {
        return <FontAwesomeIcon style={style} icon={faTimes as IconProp} />;
    }
    return <span>{status}</span>;
}

function status2color(status) {
    if (status === 'success') {
        return 'green';
    }
    if (status === 'pending') {
        return 'orange';
    }
    if (status === 'failure') {
        return 'red';
    }
    if (status === 'error') {
        return 'red';
    }
    return 'inherit';
}

interface StatusProps {
    target_url?: string | null;
    avatar_url?: Maybe<string>;
    context?: Maybe<string>;
    description?: Maybe<string>;
    state?: Maybe<string>;
}

const Status = ({ target_url, avatar_url, context, description, state }: StatusProps) => (
    <a href={target_url ?? ''} style={{ color: status2color(state) }} title={context + ': ' + description}>
        {icon4context(context, avatar_url)}
        {icon4status(state)}
    </a>
);

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
