import React from 'react';

const Repo = props => {
    const { repo = {} } = props;
    const { owner = {}, name } = repo;

    return (<div> {owner.login} / {name} </div>);
};

export default Repo;
