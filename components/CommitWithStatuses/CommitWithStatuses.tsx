import type { FC } from 'react';
import { Link } from '@chakra-ui/react';

import { StatusState } from 'relay/__generated__/CommitWithStatuses_commit.graphql';

import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '../ui/popover';
import { Spinner } from '../Spinner';

import { CommitterInfo } from './CommitterInfo';
import { CommitStatuses } from './CommitStatuses';

import styles from './CommitWithStatuses.module.css';

interface CommitWithStatusesProps {
    author?:
        | {
              user:
                  | {
                        avatarUrl: any;
                        login: string;
                        name: string | null | undefined;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
    authoredDate?: string;
    commitUrl?: string;
    message?: string;
    status?:
        | {
              commit:
                  | {
                        oid: any;
                    }
                  | null
                  | undefined;
              contexts: ReadonlyArray<{
                  avatarUrl: any | null | undefined;
                  context: string;
                  creator:
                      | {
                            login: string;
                        }
                      | null
                      | undefined;
                  description: string | null | undefined;
                  state: StatusState;
                  targetUrl: any | null | undefined;
              }>;
          }
        | null
        | undefined;
}

const CommitWithStatuses: FC<CommitWithStatusesProps> = (props) => {
    const { author, commitUrl, authoredDate = '-?-', message = '-?-', status } = props;

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
            {status && <CommitStatuses contexts={status.contexts} />}
        </>
    );
};

export default CommitWithStatuses;

export const CommitWithStatusesSkeleton = () => <Spinner size="xl" />;
