import { Circle, Float, Link } from '@chakra-ui/react';

import { Avatar } from '../ui/avatar';

export type StatusState =
    | 'SUCCESS'
    | 'PENDING'
    | 'FAILURE'
    | 'ERROR'
    | 'EXPECTED'
    // this will be added in relay generation, but it is not part of the schema:
    | '%future added value';

/** status could be any StatusState value */
function status2color(status: string | undefined | null) {
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

export interface ContextStatusProps {
    targetUrl?: string | null;
    avatarUrl?: string | null;
    context?: string | null;
    description?: string | null;
    // use string as a fallback to be robust against any value
    state?: StatusState | null;
}

// Alias for cleaner imports in new components
export type StatusProps = ContextStatusProps;

export const Status = ({ targetUrl, avatarUrl, context, description, state }: ContextStatusProps) => (
    <Link href={targetUrl ?? ''} title={context + ': ' + description} variant="underline">
        <Avatar size="2xs" name={context ?? ''} src={avatarUrl ?? undefined}>
            <Float placement="top-end" offsetX="1" offsetY="1">
                <Circle bg={status2color(state)} size="1.25em" outline="0.2em solid" outlineColor="bg" />
            </Float>
        </Avatar>
    </Link>
);
