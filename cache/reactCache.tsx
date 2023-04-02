// if not using hitchcock, then we would need to
// import { unstable_createResource } from 'react-cache';

import { createResource as createResourceViaHitchcock } from 'hitchcock';

export const createResource = (args, ...hash) => {
    return createResourceViaHitchcock(args, ...hash);
};
