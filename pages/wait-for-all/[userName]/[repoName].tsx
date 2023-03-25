import React, { Suspense } from 'react';
import { useRouter } from 'next/router';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import InternalLink from '../../../components/InternalLink';

import RichErrorBoundary from '../../../components/RichErrorBoundary';

import { UserRepoFetchAll } from '../../../container/LazyUserRepo';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import { DoMergePR } from '../../../restinpeace/github';
import { mergePullRequest } from '../../../lib/github';
import { singleArgOrDefault } from '../../../components/singleArgOrDefault';

export default function LoadAllThenPage() {
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
            <InternalLink href={`/wait-for-all/`}>back to shortcut list</InternalLink>

            <UILibContext.Provider value={UILibPureComponents}>
                <WaitForAll userName={userName} repoName={repoName} doMergePR={doMergePR} />
            </UILibContext.Provider>
        </>
    );
}

export function WaitForAll({ userName, repoName, doMergePR }) {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                {userName && repoName && <UserRepoFetchAll repoName={repoName} userName={userName} doMergePR={doMergePR} />}
            </Suspense>
        </RichErrorBoundary>
    );
}
