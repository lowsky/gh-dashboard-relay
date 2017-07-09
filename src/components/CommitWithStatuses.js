import React from 'react';
import PropTypes from 'prop-types';

import bithoundLogo from './bithound.png';
import circleciLogo from './circleci.svg';
import codacyLogo from './codacy.png';
import snykLogo from './snyk.svg';

const ContextLogo = props => <img width={48} height={48} {...props} style={{ verticalAlign: 'top' }} alt="" />;

function icon4context(context) {
    if (context === 'bitHound - Code') {
        return <ContextLogo src={bithoundLogo} alt="bitHound - Code" />;
    }
    if (context === 'bitHound - Dependencies') {
        return <ContextLogo src={bithoundLogo} alt="bitHound - Dependencies" />;
    }
    if (context === 'codacy/pr') {
        return <ContextLogo src={codacyLogo} alt="codacy" />;
    }
    if (context === 'ci/circleci') {
        return <ContextLogo src={circleciLogo} alt="circleci" />;
    }

    if (context === 'security/snyk') {
        return <ContextLogo src={snykLogo} alt="snyk" />;
    }

    return (
        <span>
            {context}
        </span>
    );
}

function icon4status(status) {
    const StatusIcon = ({ type }) =>
        <i className="material-icons" style={{ fontSize: '48px' }}>
            {type}
        </i>;
    StatusIcon.propTypes = {
        type: PropTypes.string,
    };

    if (status === 'success') {
        return <StatusIcon type="check" />;
    }
    if (status === 'pending') {
        return <StatusIcon type="hourglass_empty" />;
    }
    if (status === 'failure') {
        return <StatusIcon type="cancel" />;
    }
    if (status === 'error') {
        return <StatusIcon type="error" />;
    }
    return (
        <span>
            ?{status}{' '}
        </span>
    );
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

function renderStatus(status, idx) {
    return (
        <div key={idx} style={{ display: 'inline' }}>
            <a
                className="commitLink"
                href={status.target_url}
                style={{ color: status2color(status.state) }}
                title={status.context + ' ' + status.description}>
                {icon4context(status.context)}
                {icon4status(status.state)}
            </a>
        </div>
    );
}

let CommitWithStatus = ({ commit = {} }) => {
    const { sha = '<missing>', date = '', message = '<missing>', status = [] } = commit;
    const { author = {} } = commit;

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
        <div key={sha}>
            <a href={githubCommit}>
                <b>
                    {message.split('\n\n', 1)}
                </b>
            </a>
            <br />
            <span>
                <i>
                    {date}
                </i>
            </span>{' '}
            &nbsp; by &nbsp;
            <img width={32} src={author.avatar_url} alt="author-avatar" /> &nbsp;
            {author.login}
            <a href={'mailto:' + author.email}>{author.name}</a>
            <br />
            {onlyTakeFirstStatusPerContext(status).map((s, idx) => renderStatus(s, idx))}
        </div>
    );
};

CommitWithStatus.propTypes = {
    commit: PropTypes.object,
};

export default CommitWithStatus;
