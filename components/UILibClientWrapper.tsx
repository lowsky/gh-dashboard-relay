'use client';

import { UILib, UILibPureComponents } from "./UILibContext";

export function UILibClientWrapper({ children }) {
    return <UILib value={UILibPureComponents}>{children}</UILib>;
}
