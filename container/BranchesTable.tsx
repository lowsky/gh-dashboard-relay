import React from 'react';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import { GithubRepo } from '../lib/types/resolvers';
import { useUILib } from '../components/UILibContext';
import { DoMergePR } from './UserRepo';

export interface BranchesTableProps {
    repo?: GithubRepo;
    doMergePR?: DoMergePR;
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo, doMergePR }) => {
    const { BranchInfoRow } = useUILib();

    return (
        <Table size="sm" variant="striped">
            <Thead>
                <Tr>
                    <Th>
                        <span className="fas fa-code-branch" />
                        <span>Branch</span>
                    </Th>
                    <Th>PR</Th>
                    <Th>Commit</Th>
                </Tr>
            </Thead>
            <Tbody>
                {(repo?.branches || []).map(
                    (branch, idx) => branch && <BranchInfoRow key={idx} branch={branch} doMergePR={doMergePR} />
                )}
            </Tbody>
        </Table>
    );
};

export default BranchesTable;
