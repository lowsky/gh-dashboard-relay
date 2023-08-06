import React, { Suspense } from 'react';
import { Link, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';

import { GithubCommit } from 'restinpeace/types';
import { useUserRepo } from '../useUserRepoFromRoute';
import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';
import { Spinner } from '../Spinner';

import styles from './CommitWithStatuses.module.css';

export interface CommitWithStatusesProps {
    commit?: GithubCommit;
}

const CommitWithStatuses: React.FC<CommitWithStatusesProps> = ({ commit = {} }) => {
    const { userName, repoName } = useUserRepo();

    const { author, sha, date = '-?-', message = '-?-', statuses, status } = commit;

    const githubCommit = `https://github.com/${userName}/${repoName}/tree/${sha}`;

    let mainMessage = message?.split('\n\n', 1);

    return (
        <>
            <Popover trigger="hover">
                <PopoverTrigger>
                    <Link className={styles.status} href={githubCommit} rel="noopener noreferrer nofollow" isExternal>
                        <strong>{mainMessage}</strong>
                    </Link>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverBody>
                        <div className={styles.status}>
                            <i>{date}</i>
                            <CommitterInfo author={author} />
                        </div>
                    </PopoverBody>
                </PopoverContent>
            </Popover>

            <Suspense fallback={<Spinner size={3} />}>
                <CommitStatuses statuses={status ?? statuses} />
            </Suspense>
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size={6} />;
