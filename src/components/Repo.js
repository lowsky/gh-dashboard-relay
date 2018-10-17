import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo = {} }) => {
    const { owner = {}, name } = repo;

    return (
        <div className="column">
            <h1 className="title is-3">
                <span className="has-text-grey-light">Repository</span>
            </h1>
            <h3 className="subTitle is-3">
                <a href={`https://github.com/${owner.login}/${name}`}>
                    <strong>
                        {owner.login} / {name}
                    </strong>
                    <span className="icon">
                        <i className="fab fa-github" />
                    </span>
                </a>
            </h3>
        </div>
    );
};

Repo.propTypes = {
    repo: PropTypes.shape({
        owner: PropTypes.shape({
            login: PropTypes.string,
        }),
        name: PropTypes.string,
    }),
};

export default Repo;
