'use client';

import React, { Context, createContext, ReactNode, useContext } from 'react';
import { useParams } from 'next/navigation';

const UserRepoContext: Context<{
    repoName: string;
    userName: string;
}> = createContext({
    repoName: 'invalid,empty-context',
    userName: 'invalid,empty-context',
});

export function useUserRepo(): { repoName: string; userName: string } {
    return useContext(UserRepoContext);
}

export function UserRepoFromUrlProvider({ children }: { children: ReactNode }) {
    const { repoName, userName } = useUserRepoFromRouter();
    if (!repoName || !userName) {
        return null;
    }
    return <UserRepoContext.Provider value={{ userName, repoName }}>{children}</UserRepoContext.Provider>;
}

export function useUserRepoFromRouter(): { repoName?: string; userName?: string } {
    const { repoName, userName } = useParams() ?? {};

    if (!userName || !repoName) return {};

    if (Array.isArray(userName)) throw new Error('Can not retrieve the username from URL:' + userName);
    if (Array.isArray(repoName)) throw new Error('Can not retrieve the repo name from URL:' + repoName);

    return { userName, repoName };
}
