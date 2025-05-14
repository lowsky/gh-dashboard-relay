'use client';

import { Context, createContext, useContext } from 'react';
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

type UserRepoPageParams = {
    userName: string;
    repoName: string;
};

export function useUserRepoFromRouter(): { repoName?: string; userName?: string } {
    const { repoName, userName } = useParams<UserRepoPageParams>() ?? {};

    if (!userName || !repoName) return {};

    if (Array.isArray(userName)) throw new Error('Can not retrieve the username from URL:' + userName);
    if (Array.isArray(repoName)) throw new Error('Can not retrieve the repo name from URL:' + repoName);

    return { userName, repoName };
}
