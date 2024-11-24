import React, { Suspense } from 'react';
import { Link } from '@chakra-ui/react';

import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '../ui/popover';
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

    const mainMessage = message?.split('\n\n', 1);

    return (
        <>
            <PopoverRoot>
                <PopoverTrigger>
                    <Link className={styles.status} href={githubCommit} rel="noopener noreferrer nofollow">
                        <strong>{mainMessage}</strong>
                    </Link>
                </PopoverTrigger>
                {
                    // @ts-expect-error snippet type error
                    <PopoverContent>
                        <PopoverBody>
                            <PopoverArrow />
                            <PopoverBody>
                                <div className={styles.status}>
                                    <i>{date}</i>
                                    <CommitterInfo author={author} />
                                </div>
                            </PopoverBody>
                        </PopoverBody>
                    </PopoverContent>
                }
            </PopoverRoot>

            <Suspense fallback={<Spinner size="lg" />}>
                <CommitStatuses statuses={status ?? statuses} />
            </Suspense>
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size="xl" />;
