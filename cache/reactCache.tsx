import { createCache } from 'simple-cache-provider';
import { createResource as createResourceViaHitchcock } from 'hitchcock';

export const cache = createCache();

// hitchcock uses its own cache, so we ignore it here
export const createResource = (args, ...hash) => {
    const resource = createResourceViaHitchcock(args, ...hash);
    return { read: (_cache, args) => resource.read(args) };
}; // Provided by 'simple-cache-provider'
