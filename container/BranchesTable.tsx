import React, { Suspense } from 'react';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import { GithubRepo } from '../restinpeace/types';

import { SkeletonRow } from './BranchInfoRow';

import { useUILib } from '../components/UILibContext';
import { DoMergePR } from '../restinpeace/github';

export interface BranchesTableProps {
    repo: GithubRepo;
    doMergePR?: DoMergePR;
}
const BranchesTable: React.FC<BranchesTableProps> = ({ repo, doMergePR }) => {
    const { BranchInfoRow } = useUILib();

    const { branches, name, owner } = repo ?? {};
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
                {(branches || []).map((branch, idx) => {
                    if (branch === null) return null;
                    return (
                        <Suspense fallback={<SkeletonRow key={idx} />}>
                            <BranchInfoRow
                                key={idx}
                                branch={branch}
                                doMergePR={doMergePR}
                                userName={owner?.login!}
                                repoName={name!}
                                sha={branch.lastCommit?.sha}
                            />
                        </Suspense>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default BranchesTable;
