import React, { Suspense } from 'react';
import { Table } from '@chakra-ui/react';

import BranchInfoRow, { SkeletonRow } from 'relay/BranchInfoRowFragment';
import { RelayCon } from 'relay/RelayConnection';
import { BranchInfoRowFragment_ref$key } from './__generated__/BranchInfoRowFragment_ref.graphql';
import { Button } from '../components/ui/button';

interface BranchesTableProps {
    branches: RelayCon<BranchInfoRowFragment_ref$key[' $fragmentSpreads']>;
    refetch: () => void;
}

const BranchesTable: React.FC<BranchesTableProps> = ({ branches, refetch }) => {
    return (
        <>
            <Button onClick={refetch} disabled={!refetch}>
                Update
            </Button>
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
                    {(branches?.edges ?? []).map((edge, idx) => (
                        <Suspense fallback={<SkeletonRow />} key={idx}>
                            {
                                // @ts-expect-error temporary ignore type mismatch
                                edge?.node && <BranchInfoRow branch={edge.node} />
                            }
                        </Suspense>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    );
};

export default BranchesTable;
