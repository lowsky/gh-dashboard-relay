'use client';

import React from 'react';
import { UILib } from '../components/UILibContext';
import { UILibPureComponents } from '../components';

export function UILibClientWrapper({ children }) {
    return <UILib value={UILibPureComponents}>{children}</UILib>;
}
