import type { Decorator } from '@storybook/react';
import UILibContext from './UILibContext';
import { UILibPureComponents } from './UILibPureComponents';
import React from 'react';
import { UILibWithRelaySupport } from './UILibWithRelaySupport';

export const UILibWithRelaySupportDecorator: Decorator = (Story) => (
    <UILibContext.Provider value={UILibWithRelaySupport}>
        <Story />
    </UILibContext.Provider>
);
export const UILibPureComponentsDecorator: Decorator = (Story) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <Story />
    </UILibContext.Provider>
);
