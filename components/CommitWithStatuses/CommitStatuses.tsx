import React from 'react';

import { GithubStatus, Maybe } from 'restinpeace/types';
import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';
import { Status } from './Status';
import { Spinner } from '../Spinner';

import styles from './CommitWithStatuses.module.css';

export const CommitStatuses: React.FC<{ statuses?: Maybe<Array<Maybe<GithubStatus>>> }> = ({ statuses }) => {
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

export const Skeleton = () => <Spinner size={6} />;
