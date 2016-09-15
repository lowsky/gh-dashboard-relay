import React from 'react';

const Repo = props => {
    const { repo = {} } = props;
    const { owner = {}, name } = repo;

    return (<div> {repo.owner.login} / {repo.name} </div>);
};

export default Repo;
