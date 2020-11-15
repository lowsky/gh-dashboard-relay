import { DocsPage } from 'storybook-addon-deps/blocks';

export const parameters = {
    docs: { page: DocsPage },
    dependencies: { withStoriesOnly: true, hideEmpty: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
}