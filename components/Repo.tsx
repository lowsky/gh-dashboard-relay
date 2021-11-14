import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export interface OwnerType {
    login?: string;
}

interface RepoType {
    owner?: OwnerType;
    name?: string;
}

export interface RepoProps {
    repo?: RepoType;
}

const Repo: React.FC<RepoProps> = ({ repo: { name= '?', owner = {} } = {} }) => {
  return (
    <div className="column">
      <h1 className="title is-3">
        <span className="has-text-grey-light">Repository</span>
      </h1>
      <h3 className="subTitle is-3">
        <a href={`https://github.com/${owner.login}/${name}`} rel="noopener noreferrer nofollow">
          <strong>
            {owner && owner.login} / {name}
          </strong>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub}/>
          </span>
        </a>
      </h3>
    </div>
  );
};

export default Repo;
