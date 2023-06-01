'use client';

import React from 'react';

import UILibContext from '../../components/UILibContext';
import { UILibWithRelaySupport } from '../../components';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <UILibContext.Provider value={UILibWithRelaySupport}>{children}</UILibContext.Provider>;
}
