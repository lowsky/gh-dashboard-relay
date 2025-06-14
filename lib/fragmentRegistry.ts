import { createFragmentRegistry } from '@apollo/client/cache';
import { FragmentRegistryAPI } from '@apollo/client/cache/inmemory/fragmentRegistry';

export const fragmentRegistry: FragmentRegistryAPI = createFragmentRegistry();
