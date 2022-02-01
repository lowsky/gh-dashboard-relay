import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';

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
        <Table>
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
                    // @ts-ignore
                    (branch, idx) => branch && <BranchInfoRow key={idx} branch={branch} doMergePR={doMergePR} />
                )}
            </Tbody>
        </Table>
    );
};

export default BranchesTable;
