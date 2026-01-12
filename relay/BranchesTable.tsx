import type { FC, ReactNode } from 'react';
import { Table } from '@chakra-ui/react';
import { Button } from '../components/ui/button';

interface BranchesTableProps {
    children: ReactNode;
    refetch?: () => void;
}

const BranchesTable: FC<BranchesTableProps> = ({ children, refetch }) => {
    return (
        <>
            <Button onClick={() => refetch?.()} disabled={!refetch}>
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
                <Table.Body>{children}</Table.Body>
            </Table.Root>
        </>
    );
};

export default BranchesTable;
