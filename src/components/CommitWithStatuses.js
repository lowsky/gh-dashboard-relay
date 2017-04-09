import React from 'react';

const ContextLogo = (props) => (
    <img width={48} height={48} {...props} style={ {verticalAlign: 'top' } } />
)
function icon4context(context) {
    if (context === 'bitHound - Code') {
        return (<ContextLogo src="./assets/images/bithound.png" alt="bitHound - Code"/>);
    }
    if (context === 'bitHound - Dependencies') {
        return (<ContextLogo src="./assets/images/bithound.png" alt="bitHound - Dependencies"/>);
    }
    if (context === 'codacy/pr') {
        return (<ContextLogo src="./assets/images/codacy.png" alt="codacy"/>);
    }
    if (context === 'ci/circleci') {
        return (<ContextLogo src="./assets/images/circleci.svg" alt="circleci"/>);
    }

    return (<span>{ context }</span> );
}

function icon4status(status) {
    const StatusIcon = ({type}) => (<i className="material-icons" style={ {fontSize: '48px'} }>{type}</i>);

    if (status === 'success') {
        return <StatusIcon type='check' />;
    }
    if (status === 'pending') {
        return <StatusIcon type='hourglass_empty' />;
    }
    if (status === 'failure') {
        return <StatusIcon type='cancel' />;
    }
    if (status === 'error') {
        return <StatusIcon type='error' />;
    }
    return (<span>?{ status } </span> );
}

function status2color(status) {
    if(status=== 'success') {
        return 'green';
    }
    if(status=== 'pending') {
        return 'orange';
    }
    if(status=== 'failure') {
        return 'red';
    }
    if(status=== 'error') {
        return 'red';
    }
    return 'inherit';
}

function renderStatus(status, idx) {
    const color = status2color(status.state);

    return (
        <div key={idx} style={ { display: 'inline' } }>
            <a className="commitLink" href={status.target_url} style={{ color: color }}
                title={ status.context + ' ' + status.description }>
                {icon4context(status.context)}{icon4status(status.state)}
            </a>
        </div>
    );
}

let CommitWithStatus = props => {
    const { commit = {} } = props;
    const { sha = '<missing>', date = '', message = '<missing>', status = [] } = commit;
    const { author = {} } = props.commit;

    const githubCommit = `https://github.com/lowsky/dashboard/tree/${sha}`;

    return (
        <div key={sha}>
            <a href={githubCommit}>
                <b>{ message.split('\n\n', 1) }</b>
            </a>
            <br />
            <span><i>{date}</i></span>
            &nbsp;
            by
            &nbsp;
            <img width={32} src={author.avatar_url} />
            &nbsp;
            {author.login}
            <a href={'mailto:' + author.email}>{author.name}</a>
            <br/>
                {
                    status.map((s, idx) => renderStatus(s, idx))
                }
        </div>
    );
};

export default CommitWithStatus;
