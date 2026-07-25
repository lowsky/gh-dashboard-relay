'use client';

import type { FC } from 'react';
import { Link } from '@chakra-ui/react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa';

import { Avatar } from '../ui/avatar';
import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger } from '../ui/tooltip';
import { Spinner } from '../Spinner';
import { CommitStatuses, type StatusProps } from './CommitStatuses';

import styles from './CommitWithStatuses.module.css';

export interface CommitWithStatusesInlineProps {
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

const CommitWithStatusesInline: FC<CommitWithStatusesInlineProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;

    const firstLineOfMessage = message?.split('\n\n', 1);
    const authorUser = author?.user;
    const formattedDate = new Date(authoredDate as string).toLocaleDateString();

    return (
        <div className={styles.inlineLayout}>
            <div className={styles.mainContent}>
                <Link
                    href={commitUrl}
                    rel="noopener noreferrer nofollow"
                    className={styles.commitMessage}
                >
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>

                {authorUser && (
                    <div className={styles.authorMeta}>
                        <Avatar
                            size="2xs"
                            name={authorUser.name ?? authorUser.login}
                            src={authorUser.avatarUrl ?? undefined}
                        />
                        <span className={styles.authorName}>
                            {authorUser.name ?? authorUser.login}
                        </span>
                        <span className={styles.separator}>·</span>
                        <span className={styles.timestamp}>{formattedDate}</span>
                    </div>
                )}
            </div>

            <div className={styles.rightSection}>
                {status && <CommitStatuses contexts={status.contexts} />}
                <TooltipRoot>
                    <TooltipTrigger asChild>
                        <Link
                            href={commitUrl}
                            rel="noopener noreferrer nofollow"
                            className={styles.viewLink}
                            aria-label="View commit on GitHub"
                        >
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <TooltipArrow />
                        View commit on GitHub
                    </TooltipContent>
                </TooltipRoot>
            </div>
        </div>
    );
};

export default CommitWithStatusesInline;

export const CommitWithStatusesInlineSkeleton = () => <Spinner size="xl" />;
