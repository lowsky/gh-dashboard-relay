import { DocsPage } from 'storybook-addon-deps/blocks';
import { addParameters } from '@storybook/react';

addParameters({
    docs: { page: DocsPage },
    dependencies: { withStoriesOnly: true, hideEmpty: true },
});
