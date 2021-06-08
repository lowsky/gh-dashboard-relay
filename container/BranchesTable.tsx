import React, { useContext } from 'react';

import UILibContext from '../components/UILibContext';
import { GithubRepo } from "../lib/types/resolvers";

export interface BranchesTableProps {
  repo?: GithubRepo
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo  }) => {
  const { BranchInfoRow } = useContext(UILibContext);

  return (
    <table className="table is-bordered is-striped is-hoverable">
      <thead>
                <tr>
                    <th>
                        <span className="fas fa-code-branch" />
                        <span>Branch</span>
                    </th>
                    <th>PR</th>
                    <th>Commit</th>
                </tr>
            </thead>
            <tbody>
                {(repo?.branches || []).map((branch, idx) => (
                  <BranchInfoRow key={idx} branch={branch} />
                ))}
            </tbody>
        </table>
    );
};

export default BranchesTable;
