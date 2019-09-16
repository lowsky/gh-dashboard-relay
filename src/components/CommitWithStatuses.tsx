import React from 'react';
import PropTypes from 'prop-types';

import bithoundLogo from './bithound.png';
import circleciLogo from './circleci.svg';
import codacyLogo from './codacy.png';
import snykLogo from './snyk.svg';

import './CommitWithStatuses.css';

const ContextLogo = props => <img className="contextlogo" width={24} height={24} {...props} alt="" />;

function icon4context(context = '') {
    if (context === 'bitHound - Code') {
        return <ContextLogo src={bithoundLogo} alt="bitHound - Code" />;
    }
    if (context === 'bitHound - Dependencies') {
        return <ContextLogo src={bithoundLogo} alt="bitHound - Dependencies" />;
    }
    if (context.indexOf('Codacy/PR') >= 0) {
        return <ContextLogo src={codacyLogo} alt="codacy" />;
    }
    if (context.indexOf('ci/circleci') >= 0) {
        return <ContextLogo src={circleciLogo} alt="circleci" />;
    }

    if (context.indexOf('security/snyk') >= 0) {
        return <ContextLogo src={snykLogo} alt="snyk" />;
    }

    return <span>{context}</span>;
}

function icon4status(status: string) {
    const StatusIcon: React.FC<{ type: string }> = ({ type }) => <i className={`fa fa-${type} statusicon`} />;

    StatusIcon.propTypes = {
        type: PropTypes.string,
    };

    if (status === 'success') {
        return <StatusIcon type="check-circle" />;
    }
    if (status === 'pending') {
        return <StatusIcon type="hourglass" />;
    }
    if (status === 'failure') {
        return <StatusIcon type="exclamation-circle" />;
    }
    if (status === 'error') {
        return <StatusIcon type="times" />;
    }
    return <span>?{status} </span>;
}

function status2color(status: string) {
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

const renderStatus = ({ target_url, context, description, state }, idx) => (
    <span key={idx}>
        <a
            className="commitLink"
            href={target_url}
            style={{ color: status2color(state) }}
            title={context + ' ' + description}>
            {icon4context(context)}
            {icon4status(state)}
        </a>
    </span>
);

let CommitWithStatus = ({ commit = {} }) => {
    // @ts-ignore
    const { sha = '<missing>', date = '', message = '<missing>', status = [], author = {} } = commit;

    const githubCommit = `https://github.com/lowsky/dashboard/tree/${sha}`;

    const onlyTakeFirstStatusPerContext = statuses => {
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
