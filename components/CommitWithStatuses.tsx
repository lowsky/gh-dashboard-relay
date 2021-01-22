import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faHourglass,
    faExclamationCircle,
    faTimes,
}  from '@fortawesome/free-solid-svg-icons'

import { GithubCommit } from '../lib/types/resolvers';

import './CommitWithStatuses.module.css';

function icon4context(context = '', avatar_url: string) {
    if (avatar_url) {
        return <img className="contextlogo" width={24} height={24} src={avatar_url} alt={context} />;
    }
    return <span>{context}</span>;
}

function icon4status(status: 'success' | 'pending' | 'failure' | 'error' | any) {
    const style = {
        verticalAlign: 'top'
    };
    if (status === 'success') {
        return <FontAwesomeIcon style={style} icon={faCheckCircle} />;
    }
    if (status === 'pending') {
        return <FontAwesomeIcon style={style} icon={faHourglass} />
    }
    if (status === 'failure') {
        return <FontAwesomeIcon style={style} icon={faExclamationCircle } />
    }
    if (status === 'error') {
        return <FontAwesomeIcon style={style} icon={faTimes } />
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

const renderStatus = ({ target_url, avatar_url, context, description, state }, idx) => (
    <a key={idx}
        className="commitLink"
        href={target_url}
        style={{ color: status2color(state) }}
        title={context + ' ' + description}>
            {icon4context(context, avatar_url)}
            {icon4status(state)}
        {' '}
    </a>
);

export interface CommitWithStatusProps {
    commit?: GithubCommit;
}
let CommitWithStatus: React.FC<CommitWithStatusProps> = ({ commit = {} }) => {
    const { sha = '<missing>', date = '', message = '<missing>', status = [],
      } = commit;
    const author = {
        login: '',
        name: '',
        email: '',
        avatar_url: '',
        ...commit.author
    };
    const githubCommit = `https://github.com/lowsky/dashboard/tree/${sha}`;

    const onlyTakeFirstStatusPerContext = (statuses) => {
        const foundContexts = [];

        return statuses.reduce((acc, item) => {
            if (foundContexts[item.context]) {
                return acc;
            }
            foundContexts[item.context] = item;
            return [...acc, item];
        }, []);
    };

    return (
        <>
            <div>
                <a href={githubCommit}>
                    <b>{message.split('\n\n', 1)}</b>
                </a>
            </div>
            <div>
                <i>{date}</i>
                &nbsp; by &nbsp;
                <a href={`https://github.com/${author.login}`}>
                    {author.avatar_url && (
                        <img className="commit_avatar" width={32} src={author.avatar_url} alt="avatar" />
                    )}
                    &nbsp;
                    <span>{author.login}</span>
                </a>
                &nbsp;
                {author.email && <a href={'mailto:' + author.email}>{'?' + author.name}</a>}
            </div>
            <div className="statusline">
                {onlyTakeFirstStatusPerContext(status).map((s, idx) => renderStatus(s, idx))}
            </div>
        </>
    );
};

export default CommitWithStatus;
