import React, { Suspense } from 'react';
import { useRouter } from 'next/router';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import RichErrorBoundary from '../../../components/RichErrorBoundary';
import InternalLink from '../../../components/InternalLink';

import { UserRepoWaterfall } from '../../../container/LazyUserRepo';
import { DoMergePR } from '../../../restinpeace/github';
import { mergePullRequest } from '../../../lib/github';
import { singleArgOrDefault } from '../../../components/singleArgOrDefault';

export default function WaterfallPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;

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

    return (
        <>
            <InternalLink href={'/waterfall'}>back to shortcut list</InternalLink>

            <UILibContext.Provider value={UILibPureComponents}>
                <WaterfallMain userName={userName} repoName={repoName} doMergePR={doMergePR} />
            </UILibContext.Provider>
        </>
    );
}

export function WaterfallMain({ userName, repoName, doMergePR }) {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                {userName && repoName && (
                    <UserRepoWaterfall repoName={repoName} userName={userName} doMergePR={doMergePR} />
                )}
            </Suspense>
        </RichErrorBoundary>
    );
}
