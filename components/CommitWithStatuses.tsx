import React from 'react';
import { Link } from '@chakra-ui/react';

import { GithubCommit } from '../restinpeace/types';
import { CommitterInfo } from './CommitterInfo';

import styles from './CommitWithStatuses.module.css';
import { CommitStatuses } from './CommitStatuses';

export interface CommitWithStatusProps {
    commit?: GithubCommit;
}

const CommitWithStatus: React.FC<CommitWithStatusProps> = ({ commit = {} }) => {
    // @ts-ignore
    const { author, sha, date = '-?-', message = '-?-', statuses, status } = commit;

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
                <CommitterInfo author={author} />
            </div>

            <CommitStatuses statuses={status ?? statuses} />
        </>
    );
};

export default CommitWithStatus;
