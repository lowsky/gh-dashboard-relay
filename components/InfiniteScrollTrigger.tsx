import { ReactNode } from 'react';

import { useInfiniteScrolling } from './useInfiniteScrolling';

export default function InfiniteScrollTrigger({
    onLoadMore,
    children,
}: {
    onLoadMore: () => void;
    children: ReactNode;
}) {
    const [loaderRef] = useInfiniteScrolling(onLoadMore);

    return <div ref={loaderRef}>{children}</div>;
}
