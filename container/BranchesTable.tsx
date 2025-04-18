import React, { Suspense } from 'react';
import { Table } from '@chakra-ui/react';

import { GithubRepo } from 'restinpeace/types';

import BranchInfoRow, { SkeletonRow } from './BranchInfoRow';

export interface BranchesTableProps {
    repo: GithubRepo;
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo }) => {
    const { branches } = repo ?? {};
    return (
        <Table.Root size="sm" striped>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>
                        <span className="fas fa-code-branch" />
                        <span>Branch</span>
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>PR</Table.ColumnHeader>
                    <Table.ColumnHeader>Commit</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {(branches ?? []).filter(Boolean).map((branch, idx) => (
                    <Suspense fallback={<SkeletonRow />} key={idx}>
                        <BranchInfoRow branch={branch!} sha={branch!.lastCommit?.sha} />
                    </Suspense>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default BranchesTable;
