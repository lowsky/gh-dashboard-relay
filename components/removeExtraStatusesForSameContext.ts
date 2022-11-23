import { GithubStatus, Maybe } from '../restinpeace/types';

/**
 * Remove duplicate entries of states:
 * - So that there will be only one status with a specific context
 *   in the resulting list.
 * - Only the first status will be taken.
 */
export function removeExtraStatusesForSameContext(statuses: Maybe<GithubStatus>[] = []): GithubStatus[] {
    const filteredStatuses = statuses
        .filter((item) => item?.context)
        .reduce((acc, item) => {
            if (acc.get(item!.context)) {
                return acc;
            }
            acc.set(item!.context, item);
            return acc;
        }, new Map());

    return [...filteredStatuses.values()];
}
