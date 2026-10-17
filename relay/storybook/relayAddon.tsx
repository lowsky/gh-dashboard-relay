import { definePreviewAddon } from 'storybook/internal/csf';
import type { GraphQLTaggedNode } from 'react-relay';

import { relayDecorator } from 'relay/storybook/relayDecorator';

/**
 * adds the decorator and setups up the typing, so that
 * the required parameters will be defined in TypeScript
 * for use in editors and syntax completion.
 */

interface RelayParameters {
    query?: GraphQLTaggedNode;
    ///
    /// there are more, add them later when needed ...
}
interface RelayTypes {
    parameters: RelayParameters;
}

const relayAddonAnnotations = {
    decorators: relayDecorator,
    initialGlobals: {},
};

const relayAddon = () => definePreviewAddon<RelayTypes>(relayAddonAnnotations);
export default relayAddon;
