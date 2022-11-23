import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/react';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';
import InternalLink from "../../../components/InternalLink";

import RichErrorBoundary from '../../../components/RichErrorBoundary';

import { UserRepoFetchAll } from '../../../container/LazyUserRepo';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';

export default function LoadAllThenPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;

    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return (
            <>
                <InternalLink passHref legacyBehavior href={'/wait-for-all'}>
                    <Link>back to shortcut list</Link>
                </InternalLink>

                <UILibContext.Provider value={UILibPureComponents}>
                    <WaitForAll userName={userName} repoName={repoName} />
                </UILibContext.Provider>
            </>
        );
    }
    return <WarningMissingURLParams />;
}

export function WaitForAll({ userName, repoName }) {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoFetchAll repoName={repoName} userName={userName} />
            </Suspense>
        </RichErrorBoundary>
    );
}
