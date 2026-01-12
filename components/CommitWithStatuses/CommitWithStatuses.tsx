import type { FC } from 'react';
import { Link } from '@chakra-ui/react';

import type { CommitWithStatuses_commit$data } from 'relay/__generated__/CommitWithStatuses_commit.graphql';

import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '../ui/popover';
import { Spinner } from '../Spinner';

import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';

import styles from './CommitWithStatuses.module.css';

interface CommitWithStatusesProps {
    commit: CommitWithStatuses_commit$data;
}

const CommitWithStatuses: FC<CommitWithStatusesProps> = ({ commit }) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = commit;

    const firstLineOfMessage = message?.split('\n\n', 1);

    const authorUser = author?.user;
    return (
        <>
            {authorUser && (
                <>
                    <PopoverRoot>
                        <PopoverTrigger>
                            <span>
                                {firstLineOfMessage.map((line) => (
                                    <strong key={line}>{line}</strong>
                                ))}
                            </span>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                                <PopoverArrow />
                                <PopoverBody>
                                    <div className={styles.status}>
                                        <i>{new Date(authoredDate).toLocaleString()}</i>
                                        <CommitterInfo author={authorUser} />
                                    </div>
                                </PopoverBody>
                            </PopoverBody>
                        </PopoverContent>
                    </PopoverRoot>
                    &nbsp;
                    <Link variant="underline" href={commitUrl} rel="noopener noreferrer nofollow">
                        more
                    </Link>
                </>
            )}
            {!authorUser && (
                <span>
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                    &nbsp;
                    <Link variant="underline" href={commitUrl} rel="noopener noreferrer nofollow">
                        more
                    </Link>
                </span>
            )}
            {
                // @ts-expect-error temporary ignore type mismatch
                status && <CommitStatuses statuses={status.contexts} />
            }
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size="xl" />;
