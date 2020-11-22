import { DocsPage } from 'storybook-addon-deps/blocks';

import 'bulma/css/bulma.css';

export const parameters = {
    docs: { page: DocsPage },
    dependencies: { withStoriesOnly: true, hideEmpty: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
}