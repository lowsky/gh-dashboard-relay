import React, { useContext } from 'react';

import { UILibContext } from '../components';

const BranchesTable = ({repo = {branches:[]}}) => {const { BranchInfoRow } = useContext(UILibContext);

    return (
        <table className="table is-bordered is-striped is-hoverable">
            <thead>
                <tr>
                    <th className="is-narrow">
                        <span className="fas fa-code-branch" />
                        <span>Branch</span>
                    </th>
                    <th>Commit</th>
                </tr>
            </thead>
            <tbody>
                {(repo.branches || []).map((branch, idx) => (
                    <BranchInfoRow key={idx} branch={branch} />
                ))}
            </tbody>
        </table>
    );
};

export default BranchesTable;
