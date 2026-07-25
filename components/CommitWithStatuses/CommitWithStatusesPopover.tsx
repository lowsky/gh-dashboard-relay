'use client';

import type { FC } from 'react';
import { Link, Button, Circle } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

import { Avatar } from '../ui/avatar';
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
    PopoverHeader,
} from '../ui/popover';
import { Spinner } from '../Spinner';
import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';

import styles from './CommitWithStatuses.module.css';
import type { StatusProps } from './CommitStatuses';
import type { StatusState } from './Status';

export interface CommitWithStatusesPopoverProps {
    author?:
        | {
              user:
                  | {
                        avatarUrl: string | null | undefined;
                        login: string;
                        name: string | null | undefined;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
    authoredDate?: string | null | unknown;
    commitUrl?: string;
    message?: string;
    status?: {
        contexts?: readonly StatusProps[] | null | undefined;
    } | null | undefined;
}

function status2color(status: StatusState | string | undefined | null) {
    if (status === 'SUCCESS') return 'green.500';
    if (status === 'PENDING') return 'orange';
    if (status === 'FAILURE') return 'red';
    if (status === 'ERROR') return 'red';
    return 'inherit';
}

const CommitWithStatusesPopover: FC<CommitWithStatusesPopoverProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;

    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;
    const formattedDate = new Date(authoredDate as string).toLocaleString();

    const processedStatuses = status?.contexts
        ? removeExtraStatusesForSameContext(status.contexts)
        : [];

    return (
        <PopoverRoot>
            <PopoverTrigger asChild>
                <Link
                    href={commitUrl}
                    rel="noopener noreferrer nofollow"
                    className={styles.commitLink}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>
            </PopoverTrigger>
            <PopoverContent maxW="360px">
                <PopoverArrow />
                <PopoverHeader fontWeight="semibold" fontSize="sm" pb={2}>
                    {firstLineOfMessage}
                </PopoverHeader>
                <PopoverBody>
                    <div className={styles.popoverContent}>
                        {authorUser && (
                            <div className={styles.authorRow}>
                                <Avatar
                                    size="sm"
                                    name={authorUser.name ?? authorUser.login}
                                    src={authorUser.avatarUrl ?? undefined}
                                />
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>
                                        {authorUser.name ?? authorUser.login}
                                    </div>
                                    <div className={styles.authorDate}>{formattedDate}</div>
                                </div>
                            </div>
                        )}

                        {processedStatuses.length > 0 && (
                            <>
                                <div className={styles.statusDivider} />
                                <div className={styles.statusSummary}>
                                    <div className={styles.statusSummaryLabel}>Statuses</div>
                                    <div className={styles.statusBadges}>
                                        {processedStatuses.map((s, i) => (
                                            <div key={i} className={styles.statusBadge}>
                                                <Circle
                                                    bg={status2color(s.state)}
                                                    size="0.5em"
                                                />
                                                <span>{s.context}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <Link
                            href={commitUrl}
                            rel="noopener noreferrer nofollow"
                            className={styles.viewButton}
                        >
                            <Button size="sm" variant="surface" mt={3}>
                                View on GitHub <FaArrowRight style={{ marginLeft: '8px' }} />
                            </Button>
                        </Link>
                    </div>
                </PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    );
};

export default CommitWithStatusesPopover;

export const CommitWithStatusesPopoverSkeleton = () => <Spinner size="xl" />;
