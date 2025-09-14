// This import is necessary to ensure all Apollo Client imports
// are still available to the rest of the application.
// from https://www.apollographql.com/docs/react/data/fragments#setting-data-masking-types

import '@apollo/client';
import type { GraphQLCodegenDataMasking } from '@apollo/client/masking';

declare module '@apollo/client' {
    // eslint-disable-next-line
    interface TypeOverrides extends GraphQLCodegenDataMasking.TypeOverrides {}
}
