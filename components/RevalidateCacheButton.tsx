'use client';

import React, { useState } from 'react';

import { revalidateCache } from 'app/actions/doRevalidateCache';
import { Button } from './ui/button';

interface RevalidateCacheButtonProps {
    pathPrefix: string;
    userName: string;
    repoName: string;
}

export const RevalidateCacheButton = ({ pathPrefix, userName, repoName }: RevalidateCacheButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const onClick = async () => {
        setLoading(true);
        await revalidateCache({ pathPrefix, userName, repoName });
        setLoading(false);
    };
    return (
        <Button onClick={onClick} loading={loading}>
            Update, revalidate Cache
        </Button>
    );
};
