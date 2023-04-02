import React, { Suspense } from 'react';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import RichErrorBoundary from '../../../components/RichErrorBoundary';
import InternalLink from '../../../components/InternalLink';

import { UserRepoWaterfall } from '../../../container/LazyUserRepo';
import { UserRepoFromUrlProvider } from '../../../components/useUserRepoFromRoute';
import { DoMergePR } from '../../../restinpeace/github';
import { mergePullRequest } from '../../../lib/github';
import { singleArgOrDefault } from '../../../components/singleArgOrDefault';

export const useDoMergePR = ({ userName, repoName }) => {
    const doMergePR: DoMergePR = async (num) => {
        if (repoName && userName) {
            return await mergePullRequest({
                owner: singleArgOrDefault(userName, ''),
                repo: singleArgOrDefault(repoName, ''),
                pull_number: num,
            });
        }
        return;
    };
    return doMergePR;
};

export default function WaterfallPage() {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href={'/waterfall'}>back to shortcut list</InternalLink>
            <WaterfallMain />
        </UserRepoFromUrlProvider>
    );
}

export function WaterfallMain() {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoWaterfall />
            </Suspense>
        </RichErrorBoundary>
    );
}
