import React, { Suspense } from 'react';
import { useRouter } from 'next/router';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import RichErrorBoundary from '../../../components/RichErrorBoundary';
import InternalLink from '../../../components/InternalLink';

import UserRepoWaterfall from '../../../container/LazyUserRepo';
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

    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return (
            <>
                <InternalLink href={'/waterfall'}>back to shortcut list</InternalLink>

                <UILibContext.Provider value={UILibPureComponents}>
                    <WaterfallMain userName={userName} repoName={repoName} doMergePR={doMergePR} />
                </UILibContext.Provider>
            </>
        );
    }
    return <WarningMissingURLParams />;
}

export function WaterfallMain({ userName, repoName, doMergePR }) {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoWaterfall repoName={repoName} userName={userName} doMergePR={doMergePR} />
            </Suspense>
        </RichErrorBoundary>
    );
}
