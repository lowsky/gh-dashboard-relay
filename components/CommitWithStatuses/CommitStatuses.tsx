import type { FC } from 'react';

import { removeExtraStatusesForSameContext } from './removeExtraStatusesForSameContext';
import { Status, type ContextStatusProps } from './Status';

export type { ContextStatusProps as StatusProps };

import styles from './CommitWithStatuses.module.css';

type Maybe<T> = T | null;

type Props = {
    contexts?: Maybe<ReadonlyArray<ContextStatusProps>>;
};

export const CommitStatuses: FC<Props> = ({ contexts }) => {
    if (contexts)
        return (
            <div className={styles.statusLine}>
                {removeExtraStatusesForSameContext(contexts).map((status) => (
                    <Status key={status.context} {...status} />
                ))}
            </div>
        );
    return null;
};
