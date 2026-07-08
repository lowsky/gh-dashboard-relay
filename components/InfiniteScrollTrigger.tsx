import type { ReactNode } from 'react';

import { useInfiniteScrolling } from './useInfiniteScrolling';

export default function InfiniteScrollTrigger({
    onLoadMore,
    enabled = true,
    children,
}: {
    onLoadMore: () => void;
    enabled?: boolean;
    children: ReactNode;
}) {
    const [loaderRef] = useInfiniteScrolling(enabled ? onLoadMore : null);

    if (enabled) {
        return <div ref={loaderRef}>{children}</div>;
    }
    return children;
}
