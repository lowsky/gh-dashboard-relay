import React, { Suspense } from 'react';
import {
    Link,
    //    Popover, PopoverBody, PopoverContent, PopoverTrigger
} from '@chakra-ui/react';

import { GithubCommit } from 'restinpeace/types';
import { useUserRepo } from '../useUserRepoFromRoute';
import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';
import { Spinner } from '../Spinner';

import styles from './CommitWithStatuses.module.css';
import { PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '../ui/popover';

export interface CommitWithStatusesProps {
    commit?: GithubCommit;
}

const CommitWithStatuses: React.FC<CommitWithStatusesProps> = ({ commit = {} }) => {
    const { userName, repoName } = useUserRepo();

    const { author, sha, date = '-?-', message = '-?-', statuses, status } = commit;

    const githubCommit = `https://github.com/${userName}/${repoName}/tree/${sha}`;

    const mainMessage = message?.split('\n\n', 1);

    return (
        <>
            <PopoverRoot>
                <PopoverTrigger>
                    <Link className={styles.status} href={githubCommit} rel="noopener noreferrer nofollow">
                        <strong>{mainMessage}</strong>
                    </Link>
                </PopoverTrigger>
                <PopoverBody>
                    <div className={styles.status}>
                        <i>{date}</i>
                        <CommitterInfo author={author} />
                    </div>
                </PopoverBody>
            </PopoverRoot>
            <Suspense fallback={<Spinner size={3} />}>
                <CommitStatuses statuses={status ?? statuses} />
            </Suspense>
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size={6} />;
