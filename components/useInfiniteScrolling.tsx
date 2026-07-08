import { useEffect, useRef } from 'react';

export function useInfiniteScrolling(onLoadMore: (() => void) | null) {
    const loadTriggerRef = useRef(null);

    useEffect(() => {
        if (onLoadMore) {
            const current = loadTriggerRef.current;
            if (current) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0]?.isIntersecting) {
                            onLoadMore();
                        }
                    },
                    { threshold: 1 }
                );

                observer.observe(current);

                return () => {
                    observer.unobserve(current);
                };
            }
        }
    }, [onLoadMore]);
    return [loadTriggerRef, onLoadMore];
}
