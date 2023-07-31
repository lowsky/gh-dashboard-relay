import React from 'react';
import { Avatar, AvatarBadge } from '@chakra-ui/react';

import { Maybe } from 'restinpeace/types';

type StatusType = 'success' | 'pending' | 'failure' | 'error' | any;

function status2color(status: StatusType) {
    if (status === 'success') {
        return 'green.500';
    }
    if (status === 'pending') {
        return 'orange';
    }
    if (status === 'failure') {
        return 'red';
    }
    if (status === 'error') {
        return 'red';
    }
    return 'inherit';
}

interface StatusProps {
    target_url?: string | null;
    avatar_url?: Maybe<string>;
    context?: Maybe<string>;
    description?: Maybe<string>;
    state?: Maybe<string>;
}

export const Status = ({ target_url, avatar_url, context, description, state }: StatusProps) => (
    <a href={target_url ?? ''} title={context + ': ' + description}>
        <Avatar
            size="xs"
            name={context ?? ''}
            src={avatar_url ?? undefined}
            loading="lazy"
            referrerPolicy="no-referrer">
            <AvatarBadge boxSize="1.25em" bg={status2color(state)} placement="top-end" />
        </Avatar>
    </a>
);
