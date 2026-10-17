'use client';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function Login({ title = 'Login' }: { title?: string }) {
    const router = useRouter();

    const original_url = encodeURIComponent(escape(window.location.href));

    // @ts-expect-error error TS2345: query parameter type is not assignable to route type
    return <Button onClick={() => router.push(`/api/auth/login?original_url=${original_url}`)}>{title}</Button>;
}
