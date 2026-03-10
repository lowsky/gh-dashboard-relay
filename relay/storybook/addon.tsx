import { definePreviewAddon } from 'storybook/internal/csf';

import { relayDecorator } from 'relay/storybook/relayDecorator';

/**
 * adds the decorator and setups up the typing, so that
 * the required parameters will be defined in typescript
 * for use in editors and syntax completion.
 */

interface RelayParameters {
    // TODO - could be added later...
}
interface RelayTypes {
    parameters: RelayParameters;
}

const apolloAddonAnnotations = {
    decorators: relayDecorator,
    initialGlobals: {},
};

export default () => definePreviewAddon<RelayTypes>(apolloAddonAnnotations);
