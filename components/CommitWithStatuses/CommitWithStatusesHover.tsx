'use client';

import type { FC } from 'react';
import { Link } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger } from '../ui/tooltip';
import { Spinner } from '../Spinner';
import { CommitStatuses, type StatusProps } from './CommitStatuses';
import { CommitterInfo } from './CommitterInfo';

import styles from './CommitWithStatuses.module.css';

export interface CommitWithStatusesHoverProps {
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

const CommitWithStatusesHover: FC<CommitWithStatusesHoverProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;

    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;

    const tooltipContent = (
        <div className={styles.hoverTooltip}>
            <div className={styles.tooltipTimestamp}>
                {new Date(authoredDate as string).toLocaleString()}
            </div>
            {authorUser && <CommitterInfo author={authorUser} />}
        </div>
    );

    return (
        <span className={styles.commitRow}>
            {authorUser ? (
                <TooltipRoot>
                    <TooltipTrigger asChild>
                        <Link
                            href={commitUrl}
                            rel="noopener noreferrer nofollow"
                            className={styles.commitLink}
                        >
                            {firstLineOfMessage.map((line) => (
                                <strong key={line}>{line}</strong>
                            ))}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <TooltipArrow />
                        {tooltipContent}
                    </TooltipContent>
                </TooltipRoot>
            ) : (
                <Link
                    href={commitUrl}
                    rel="noopener noreferrer nofollow"
                    className={styles.commitLink}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>
            )}

            <Link
                href={commitUrl}
                rel="noopener noreferrer nofollow"
                className={styles.externalLinkIcon}
                aria-label="View commit on GitHub"
            >
                <FaExternalLinkAlt />
            </Link>

            {status && <CommitStatuses contexts={status.contexts} />}
        </span>
    );
};

export default CommitWithStatusesHover;

export const CommitWithStatusesHoverSkeleton = () => <Spinner size="xl" />;
