import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Avatar } from '@chakra-ui/react';

import { Maybe } from '../restinpeace/types';

import styles from './CommitWithStatuses.module.css';

function icon4context(context, avatar_url?: Maybe<string>) {
    if (avatar_url) {
        return (
            <Avatar
                className={styles.contextLogo}
                w={6}
                h={6}
                src={avatar_url}
                loading="lazy"
                referrerPolicy="no-referrer"
            />
        );
    }
    return <span>{context ?? '-?-'}</span>;
}

function icon4status(status: 'success' | 'pending' | 'failure' | 'error' | any) {
    const style = {
        color: status2color(status),
        verticalAlign: 'top',
        display: 'inline',
        height: '16px',
    };
    if (status === 'success') {
        return <FontAwesomeIcon style={style} icon={faCheckCircle as IconProp} />;
    }
    if (status === 'pending') {
        return <FontAwesomeIcon style={style} icon={faHourglass as IconProp} />;
    }
    if (status === 'failure') {
        return <FontAwesomeIcon style={style} icon={faExclamationCircle as IconProp} />;
    }
    if (status === 'error') {
        return <FontAwesomeIcon style={style} icon={faTimes as IconProp} />;
    }
    return <span>{status}</span>;
}

function status2color(status) {
    if (status === 'success') {
        return 'green';
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
    <a href={target_url ?? ''} style={{ color: status2color(state) }} title={context + ': ' + description}>
        {icon4context(context, avatar_url)}
        {icon4status(state)}
    </a>
);
