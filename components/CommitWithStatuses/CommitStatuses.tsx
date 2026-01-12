import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';
import { Status } from './Status';

import { GithubStatus } from './githubStatus';

import styles from './CommitWithStatuses.module.css';
import { FC } from 'react';

type Maybe<T> = T | null;

type Props = { statuses?: Maybe<Array<Maybe<GithubStatus>>> };
export const CommitStatuses: FC<Props> = ({ statuses }) => {
    if (statuses)
        return (
            <div className={styles.statusLine}>
                {removeExtraStatusesForSameContext(statuses).map((status, idx) => (
                    <Status key={idx} {...status} />
                ))}
            </div>
        );
    return null;
};
