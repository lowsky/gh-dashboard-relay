import React from 'react';
import PropTypes from 'prop-types';

import { UILibContext } from '../components';

const BranchesTable = props => {
    const { repo = {} } = props;
    const { branches = [] } = repo;


    return (
    <UILibContext.Consumer>
        {({ BranchInfoRow })) => (
        <table className="table is-bordered is-striped is-hoverable">
            <thead>
                <tr>
                    <th className="is-narrow">
                        <span className="fas fa-code-branch" />
                        <span>Branch</span>
                    </th>
                    <th className="">Commit</th>
                </tr>
            </thead>
            <tbody>
                {branches.map((branch, idx) => (
                    <BranchInfoRow key={idx} branch={branch} />
                ))}
            </tbody>
        </table>
    )}
    </UILibContext.Consumer>
    );
};

BranchesTable.propTypes = {
    repo: PropTypes.shape({
        branches: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                lastCommit: PropTypes.object,
            })
        ),
    }),
};

export default BranchesTable;
