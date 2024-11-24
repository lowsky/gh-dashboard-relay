import React from 'react';

import { Maybe } from 'restinpeace/types';
import { Avatar } from '../ui/avatar';
import { Circle, Float } from '@chakra-ui/react';

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
        <Avatar size="2xs" name={context ?? ''} src={avatar_url ?? undefined} loading="lazy">
            {
                <Float placement="top-end" offsetX="1" offsetY="1">
                    <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
                </Float>
            }
        </Avatar>
    </a>
);
