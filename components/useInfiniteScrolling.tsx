import { useEffect, useRef } from 'react';

export function useInfiniteScrolling(onLoadMore: () => void) {
    const loadTriggerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    onLoadMore();
                }
            },
            { threshold: 1 }
        );

        const current = loadTriggerRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [onLoadMore]);
    return [loadTriggerRef, onLoadMore];
}
