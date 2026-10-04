'use client';
import type { ReactNode } from 'react';
import { useParams } from 'next/navigation';

import { NavBar } from 'components/NavBar';
import Breadcrumbs from 'components/Breadcrumbs';
import type { NavItems } from 'components/Breadcrumbs';

export default function UserLayout({ children }: { children: ReactNode }) {
    const params = useParams();
    const items: NavItems = [
        { label: 'Relay', href: '/relay' },
        { label: params?.userName, href: '/relay/' + params?.userName },
        { label: params?.repoName },
    ];
    return (
        <>
            <NavBar navItems={items} />
            <Breadcrumbs items={items} />
            <br />
            {children}
        </>
    );
}
