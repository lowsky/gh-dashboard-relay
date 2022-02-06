import { removeExtraStatusesForSameContext } from '../removeExtraStatusesForSameContext';
import { GithubStatus } from '../../lib/types/resolvers';

describe('remove Extra Statuses For Same Context', function () {
    it('should only return the first status when there are two with same context', function () {
        const context = 'context_1';
        const st1: GithubStatus = {
            state: 'pending',
            context,
        };
        const st2: GithubStatus = {
            state: 'finished',
            context,
        };
        const statuses = [st1, st2];

        const actual = removeExtraStatusesForSameContext(statuses);

        expect(actual).toStrictEqual([st1]);
    });
});
