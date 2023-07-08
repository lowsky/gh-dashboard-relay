'use client';

import { UILib } from './UILibContext';
import { UILibPureComponents } from './index';

export function UILibClientWrapper({ children }) {
    return <UILib value={UILibPureComponents}>{children}</UILib>;
}
