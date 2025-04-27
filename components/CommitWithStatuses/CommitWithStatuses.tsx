import React, { Suspense } from 'react';
import { Link } from '@chakra-ui/react';

import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '../ui/popover';
import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';
import { Spinner } from '../Spinner';

import styles from './CommitWithStatuses.module.css';
import { CommitWithStatuses_commit$data } from '../../relay/__generated__/CommitWithStatuses_commit.graphql';

export interface CommitWithStatusesProps {
    commit: CommitWithStatuses_commit$data;
}

const CommitWithStatuses: React.FC<CommitWithStatusesProps> = ({ commit }) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = commit;

    const mainMessage = message?.split('\n\n', 1);

    return (
        <>
            <PopoverRoot>
                <PopoverTrigger>
                    <span>
                        <strong>{mainMessage}</strong> &nbsp;
                        <Link className={styles.status} href={commitUrl} rel="noopener noreferrer nofollow">
                            more
                        </Link>
                    </span>
                </PopoverTrigger>
                {
                    // @ts-expect-error snippet type error
                    <PopoverContent>
                        <PopoverBody>
                            <PopoverArrow />
                            <PopoverBody>
                                <div className={styles.status}>
                                    {<i>{new Date(authoredDate).toLocaleString()}</i>}
                                    <CommitterInfo author={author?.user} />
                                </div>
                            </PopoverBody>
                        </PopoverBody>
                    </PopoverContent>
                }
            </PopoverRoot>

            <Suspense fallback={<Spinner size="lg" />}>
                <CommitStatuses statuses={status?.contexts} />
            </Suspense>
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size="xl" />;
