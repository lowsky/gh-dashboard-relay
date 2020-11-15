import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCheckCircle,
    faHourglass,
    faExclamationCircle,
    faTimes,
}  from '@fortawesome/free-solid-svg-icons'

import './CommitWithStatuses.module.css';

function icon4context(context = '', avatar_url: string) {
    if (avatar_url) {
        return <img className="contextlogo" width={24} height={24} src={avatar_url} alt={context} />;
    }
    if (context === 'bitHound - Code') {
        return <Image src={'/bithound.png'} width={24} height={24} alt="bitHound - Code" />;
    }
    if (context === 'bitHound - Dependencies') {
        return <Image src={'/bithound.png'} width={24} height={24} alt="bitHound - Dependencies" />;
    }
    /*
    if (context.indexOf('Codacy/PR') >= 0) {
        return <img className="contextlogo" width={24} height={24} src={codacyLogo} alt="codacy" />;
    }
    if (context.indexOf('ci/circleci') >= 0) {
        return <img className="contextlogo" width={24} height={24} src={circleciLogo} alt="circleci" />;
    }

    if (context.indexOf('security/snyk') >= 0) {
        return <img className="contextlogo" width={24} height={24} src={snykLogo} alt="snyk" />;
    }
*/
    return <span>{context}</span>;
}

function icon4status(status: 'success' | 'pending' | 'failure' | 'error' | any) {
    // const StatusIcon: React.FC<{ type: string }> = ({ type }) => <FontAwesomeIcon icon={type} classname={`statusicon`} />;

    if (status === 'success') {
        return <FontAwesomeIcon icon={faCheckCircle} />;
    }
    if (status === 'pending') {
        return <FontAwesomeIcon icon={faHourglass}  />
    }
    if (status === 'failure') {
        return <FontAwesomeIcon icon={faExclamationCircle } />
    }
    if (status === 'error') {
        return <FontAwesomeIcon icon={faTimes } />
    }
    return <span>?{status} </span>;
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
    <span key={idx}>
        <a
            className="commitLink"
            href={target_url}
            style={{ color: status2color(state) }}
            title={context + ' ' + description}>
            {icon4context(context, avatar_url)}
            {icon4status(state)}
        </a>
    </span>
);

let CommitWithStatus = ({ commit = {} }) => {
    // @ts-ignore
    const { sha = '<missing>', date = '', message = '<missing>', status = [], author = {} } = commit;

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
