'use client';

import React, { useState } from 'react';

import { Button } from '@chakra-ui/react';

import { revalidateCache } from 'app/actions/doRevalidateCache';

export default interface RevalidateCacheButtonProps {
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
        <Button onClick={onClick} isLoading={loading}>
            Update, revalidate Cache
        </Button>
    );
};
