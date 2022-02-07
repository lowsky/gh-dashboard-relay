import React, { useContext } from 'react';

import { GithubRepo } from '../lib/types/resolvers';
import UILibContext, { UILib } from '../components/UILibContext';
import { DoMergePR } from './UserRepo';

export interface BranchesTableProps {
    repo?: GithubRepo;
    doMergePR?: DoMergePR;
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo, doMergePR }) => {
    const { BranchInfoRow } = useContext<UILib>(UILibContext) as UILib;

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
                {(repo?.branches || []).map(
                    (branch, idx) => branch && <BranchInfoRow key={idx} branch={branch} doMergePR={doMergePR} />
                )}
            </tbody>
        </table>
    );
};

export default BranchesTable;
