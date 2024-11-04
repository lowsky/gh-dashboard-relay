'use server';

import { revalidatePath } from 'next/cache';

export const revalidateCache = async ({ pathPrefix, userName, repoName }) => {
    if (userName && repoName) {
        console.log('Revalidating page render cache for', pathPrefix, userName, repoName);
        revalidatePath(`${pathPrefix}/${userName}/${repoName}`);
    } else {
        console.log('Revalidating page render cache for', pathPrefix);
        revalidatePath(pathPrefix);
    }
};
