import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Spinner: React.FC = () => (
    <span className="icon is-large">
        <FontAwesomeIcon icon={faSpinner as IconProp} size="3x" />
    </span>
);
