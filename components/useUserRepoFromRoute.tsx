import React, { Context, createContext, ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';

const UserRepoContext: Context<{
    repoName: string;
    userName: string;
}> = createContext({
    repoName: 'context used without',
    userName: 'context',
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

function useUserRepoFromRouter(): { repoName?: string; userName?: string } {
    const router = useRouter();
    const { userName, repoName } = router.query;

    if (!userName || !repoName) return {};

    if (Array.isArray(userName)) throw new Error('Can not retrieve the username from URL:' + userName);
    if (Array.isArray(repoName)) throw new Error('Can not retrieve the repo name from URL:' + repoName);

    return { userName, repoName };
}
