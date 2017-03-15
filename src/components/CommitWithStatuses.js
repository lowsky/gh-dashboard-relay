import React from 'react';

function icon4context(context) {
    if(context=== 'bitHound - Code') {
        return (<img width={48} height={48} src="./assets/images/bithound.png" alt="bitHound - Code"/>);
    }
    if(context=== 'bitHound - Dependencies') {
        return (<img width={48} height={48} src="./assets/images/bithound.png" alt="bitHound - Dependencies"/>);
    }
    if(context=== 'codacy/pr') {
        return (<img width={48} height={48} src="./assets/images/codacy.png" alt="codacy"/>);
    }
    if(context=== 'ci/circleci') {
        return (<img width={48} height={48} src="./assets/images/circleci.png" alt="circleci"/>);
    }

    return (<span>{ context }</span> );
}

function icon4status(status) {
    if(status=== 'success') {
        return (<span className="glyphicon glyphicon-ok green"></span>);
    }
    if(status=== 'pending') {
        return (<span className="glyphicon glyphicon-hourglass orange"></span>);
    }
    if(status=== 'failure') {
        return (<span className="glyphicon glyphicon-remove red"></span>);
    }
    if(status=== 'error') {
        return (<span className="glyphicon glyphicon-remove red"></span>);
    }
    return (<span>{ status }</span> );
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
        <div key={idx}><a className='commitLink' href={ status.target_url } style={ {color: color} }>
            { icon4status(status.state) } - { icon4context(status.context) } { status.description }</a>
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
                <span><i>{ date }</i></span>
                &nbsp;
                <b>{ message.split('\n\n', 1) }</b>
            </a>
                <br/>
                <img width={16} src={author.avatar_url}/> by {author.login}
                <a href={'mailto:' + author.email}>{author.name}</a>
                {
                    status.map((s, idx) => renderStatus(s, idx))
                }
        </div>
    );
};

export default CommitWithStatus;
