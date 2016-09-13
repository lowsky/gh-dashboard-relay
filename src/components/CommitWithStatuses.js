import React from 'react';

function icon4context(context) {
    if(context=== 'bitHound - Code') {
        return (<img width={48} height={48} src="./bithound.png" alt="bitHound - Code"/>);
    }
    if(context=== 'bitHound - Dependencies') {
        return (<img width={48} height={48} src="./bithound.png" alt="bitHound - Dependencies"/>);
    }
    if(context=== 'codacy/pr') {
        return (<img width={48} height={48} src="./codacy.png" alt="codacy"/>);
    }
    if(context=== 'ci/circleci') {
        return (<img width={48} height={48} src="./circleci.png" alt="circleci"/>);
    }
    if(context=== 'code-review/gitcolony') {
        return (<img width={48} height={48} src="./bithound.png" alt="gitcolony"/>);
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
        return "green";
    }
    if(status=== 'pending') {
        return "orange";
    }
    if(status=== 'failure') {
        return "red";
    }
    if(status=== 'error') {
        return "red";
    }
    return 'inherit';
}

function renderStatus(status) {
    const linkStyle = {};
    const color = status2color(status.state);

    return (
        <div><a className='commitLink' href={ status.target_url } style={ {color: color} }>
            { icon4status(status.state) } - { icon4context(status.context) } { status.description }</a>
        </div>
        );
}

let CommitWithStatus = React.createClass({
    render: function () {
        const { sha='<missing>', date='', message='<missing>', status=[] } = this.props.commit;

        const githubCommit = `https://github.com/lowsky/dashboard/tree/${sha}`;

        return (
            <div>
            <a href={githubCommit}>
                <span><i>{ date }</i></span>
                <b>{ message }</b>
            </a>
                {
                    status.map(s => renderStatus(s))
                }
            </div>
        );
    }
});

export default CommitWithStatus;
