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

/**
 * Render each non-null edge's node through children, skipping missing nodes.
 * Show a spinner while loading; without edges, otherwise return null. An empty
 * edge array renders an empty list, with a spinner if loading.
 *
 * When every edge has a node, the last item's scroll trigger calls loadMore with
 * endCursor if hasNextPage is true, loading is false, and the cursor is nonempty.
 * Missing edges or nodes prevent a scroll trigger from being enabled.
 * Callback errors are not caught, and promises returned by loadMore are not awaited.
 */
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
    return (
        <Ul variant="plain">
            {edges.map((edge, idx) => {
                const isLastElement = edges.length - 1 === idx;
                const node = edge?.node;

                // Check if this is the last element and we can load more
                const onLoadMore = () => !loading && pageInfo.endCursor && loadMore(pageInfo.endCursor);

                // Skip rendering for edges without nodes, but keep trigger on last edge
                if (!node) {
                    if (isLastElement && pageInfo.hasNextPage) {
                        return (
                            <InfiniteScrollTrigger
                                key={idx}
                                enabled
                                onLoadMore={onLoadMore}>
                                <div />
                            </InfiniteScrollTrigger>
                        );
                    }
                    return null;
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
