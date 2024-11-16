import { unstable_createResource } from 'react-cache';

/*
from their reame:

**Use it at your own risk.**

# No, Really, It Is Unstable
*/

export const createResource = (fetch, maybeHashInput) => {
    return unstable_createResource(fetch, maybeHashInput);
};
