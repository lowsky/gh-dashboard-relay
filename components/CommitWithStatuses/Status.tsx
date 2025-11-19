import { Circle, Float } from '@chakra-ui/react';

import { Avatar } from '../ui/avatar';

// LATER: improve typing
type StatusType = 'SUCCESS' | 'PENDING' | 'FAILURE' | 'ERROR' | string | undefined | null;

function status2color(status: StatusType) {
    if (status === 'SUCCESS') {
        return 'green.500';
    }
    if (status === 'PENDING') {
        return 'orange';
    }
    if (status === 'FAILURE') {
        return 'red';
    }
    if (status === 'ERROR') {
        return 'red';
    }
    return 'inherit';
}

interface StatusProps {
    targetUrl?: string | null;
    avatarUrl?: string | null;
    context?: string | null;
    description?: string | null;
    state?: string | null;
}

export const Status = ({ targetUrl, avatarUrl, context, description, state }: StatusProps) => (
    <a href={targetUrl ?? ''} title={context + ': ' + description}>
        <Avatar size="2xs" name={context ?? ''} src={avatarUrl ?? undefined}>
            <Float placement="top-end" offsetX="1" offsetY="1">
                <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
            </Float>
        </Avatar>
    </a>
);
