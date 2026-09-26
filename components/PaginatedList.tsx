import React from 'react';
import { Spinner } from 'components/Spinner';
import { Ul } from 'components/ChakraMdxProvider';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';

interface PaginatedListProps<NodeType extends { id: string }> {
    children: (props: { node: NodeType }) => React.ReactNode;
    edges:
        | ReadonlyArray<
              | {
                    node: NodeType | null | undefined;
                }
              | null
              | undefined
          >
        | null
        | undefined;
    loading: boolean;
    pageInfo: { readonly hasNextPage: boolean; readonly endCursor: string | null | undefined };
    loadMore: (cursor: string) => Promise<void> | void;
}

export function PaginatedList<NodeType extends { id: string }>({
    children,
    edges,
    loading,
    pageInfo,
    loadMore,
}: PaginatedListProps<NodeType>) {
    if (!edges) {
        if (loading) {
            return <Spinner size="sm" />;
        }
        return null;
    }
    const filteredEdges = edges.filter((e) => e?.node) as Array<{ node: NodeType }>;

    return (
        <Ul variant="plain">
            {filteredEdges.map((edge, idx) => {
                const isLastElement = edges.length - 1 === idx;
                const node = edge?.node;

                // Check if this is the last element and we can load more
                const onLoadMore = () => !loading && pageInfo.endCursor && loadMore(pageInfo.endCursor);

                if (!node) {
                    return (
                        <InfiniteScrollTrigger
                            key={edges.length - 1}
                            enabled={isLastElement && pageInfo.hasNextPage}
                            onLoadMore={onLoadMore}>
                            <div />
                        </InfiniteScrollTrigger>
                    );
                }
                return (
                    <InfiniteScrollTrigger
                        key={node.id}
                        enabled={isLastElement && pageInfo.hasNextPage}
                        onLoadMore={onLoadMore}>
                        {children({ node })}
                    </InfiniteScrollTrigger>
                );
            })}
            {loading && <Spinner size="sm" />}
        </Ul>
    );
}
