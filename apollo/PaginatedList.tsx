import { Spinner } from 'components/Spinner';
import { Ul } from 'components/ChakraMdxProvider';

interface PaginatedListProps<NodeType> {
    children: (props: {
        edges: Array<{
            node: NodeType | null;
        }>;
    }) => React.ReactNode;
    edges: Array<{
        node: NodeType | null;
    } | null> | null;
    loading: boolean;
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    showAll: boolean;
    loadMore: (cursor: string) => Promise<void>;
}

export function PaginatedList<NodeType>({
    children,
    edges,
    loading,
    pageInfo,
    showAll,
    loadMore,
}: PaginatedListProps<NodeType>) {
    if (!edges) {
        if (loading) {
            return <Spinner size="sm" />;
        }
        return null;
    }
    const filteredEdges = edges.filter((e) => e?.node) as Array<{ node: NodeType }>;
    if (edges) return <Ul>{children({ edges: filteredEdges })}</Ul>;
}
