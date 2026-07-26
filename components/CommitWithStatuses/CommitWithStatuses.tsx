import type { FC } from 'react';
import { Link } from '@chakra-ui/react';

import { Spinner } from '../Spinner';

import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';
import { ContextStatusProps } from 'components/CommitWithStatuses/Status';

import styles from './CommitWithStatuses.module.css';

interface CommitWithStatusesProps {
    author?:
        | {
              user:
                  | {
                        avatarUrl: string | null | undefined;
                        login: string;
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

const CommitWithStatuses: FC<CommitWithStatusesProps> = (props) => {
    const { author, commitUrl = '0815', authoredDate = '-?-', message = '-?-', status } = props;

    const firstLineOfMessage = message?.split('\n\n', 1);

    const authorUser = author?.user;
    return (
        <div className={styles.inlineLayout}>
            <div className={styles.mainContent}>
                <Link
                    href={commitUrl}
                    title="View commit on GitHub"
                    rel="noopener noreferrer nofollow"
                    aria-label="View commit on GitHub">
                    {firstLineOfMessage.map((line) => (
                        <strong key={line}>{line}</strong>
                    ))}
                </Link>

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

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size="xl" />;
