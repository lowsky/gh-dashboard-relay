'use client';

import React from 'react';

import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components/UILibPureComponents';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <UILibContext.Provider value={UILibPureComponents}>{children}</UILibContext.Provider>;
}

//export const dynamic = "force";
export const dynamic = 'force-dynamic'
export const revalidate = 5
// not in server-component:
// export const fetchCache = 'default-no-store';
