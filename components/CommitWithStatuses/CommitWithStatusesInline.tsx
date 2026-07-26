'use client';

import type { FC } from 'react';
import { Link } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger } from '../ui/tooltip';
import { Spinner } from '../Spinner';

import { CommitterInfo } from 'components/CommitWithStatuses/CommitterInfo';
import { CommitStatuses, type StatusProps } from './CommitStatuses';

import styles from './CommitWithStatuses.module.css';
import { ContextStatusProps } from 'components/CommitWithStatuses/Status';

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
    authoredDate?: string | null | undefined;
    commitUrl?: string;
    message?: string;
    status?:
        | {
              commit?:
                  | {
                        oid: any;
                    }
                  | null
                  | undefined;
              contexts?: readonly ContextStatusProps[] | null | undefined;
          }
        | null
        | undefined;
}

const CommitWithStatusesInline: FC<CommitWithStatusesInlineProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;

    const firstLineOfMessage = message?.split('\n\n', 1);

    const authorUser = author?.user;
    return (
        <div className={styles.inlineLayout}>
            <div className={styles.mainContent}>
                <TooltipRoot>
                    <TooltipTrigger asChild>
                        <Link href={commitUrl} rel="noopener noreferrer nofollow" className={styles.commitMessage}>
                            {firstLineOfMessage.map((line) => (
                                <strong key={line}>{line}</strong>
                            ))}
                            <Link
                                href={commitUrl}
                                rel="noopener noreferrer nofollow"
                                className={styles.viewLink}
                                aria-label="View commit on GitHub">
                                <FaExternalLinkAlt />
                            </Link>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <TooltipArrow />
                        View commit on GitHub
                    </TooltipContent>
                </TooltipRoot>

                <div className={styles.authorMetaRow}>
                    {authorUser && (
                        <div className={styles.authorMeta}>
                            {authoredDate && (
                                <span className={styles.timestamp}>{new Date(authoredDate).toLocaleString()}</span>
                            )}
                            <CommitterInfo author={authorUser} />
                        </div>
                    )}

                    {status && <CommitStatuses contexts={status.contexts} />}
                </div>
            </div>
        </div>
    );
};

export default CommitWithStatusesInline;

export const CommitWithStatusesInlineSkeleton = () => <Spinner size="xl" />;
