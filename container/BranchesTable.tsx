import React, { Suspense } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { GithubRepo } from '../lib/types/resolvers';
import { useUILib } from '../components/UILibContext';
import { DoMergePR } from './UserRepo';
import { Spinner } from '../components/Spinner';

export interface BranchesTableProps {
    repo?: GithubRepo;
    doMergePR?: DoMergePR;
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo, doMergePR }) => {
    const { BranchInfoRow } = useUILib();

    const repoName = repo?.name;
    const userName = repo?.owner?.login;

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
                {(repo?.branches || []).map((branch, idx) => {
                    if (!branch?.lastCommit?.sha) return '0';
                    return (
                        branch && (
                            <Suspense
                                fallback={
                                    <Tr>
                                        <Td>
                                            <Spinner />
                                        </Td>
                                        <Td>
                                            <Spinner />
                                        </Td>
                                        <Td>
                                            <Spinner />
                                        </Td>
                                    </Tr>
                                }>
                                <BranchInfoRow
                                    key={idx}
                                    branch={branch}
                                    doMergePR={doMergePR}
                                    {...{ userName, repoName, sha: branch.lastCommit.sha }}
                                />
                            </Suspense>
                        )
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default BranchesTable;
