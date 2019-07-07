import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo: { name, owner = {} } = {} }) => (
    <div className="column">
        <h1 className="title is-3">
            <span className="has-text-grey-light">Repository</span>
        </h1>
        <h3 className="subTitle is-3">
            <a href={`https://github.com/${owner.login}/${name}`}>
                <strong>
                    {owner && owner.login} / {name}
                </strong>
                <span className="icon">
                    <i className="fab fa-github" />
                </span>
            </a>
        </h3>
    </div>
);

Repo.propTypes = {
    repo: PropTypes.shape({
        owner: PropTypes.shape({
            login: PropTypes.string,
        }),
        name: PropTypes.string,
    }),
};

export default Repo;
