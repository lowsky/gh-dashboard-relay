import { createFragmentRegistry } from '@apollo/client/cache';
import type { FragmentRegistryAPI } from '@apollo/client/cache';

export const fragmentRegistry: FragmentRegistryAPI = createFragmentRegistry();
