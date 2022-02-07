import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Spinner: React.FC = () => (
    <span className="icon is-large">
        <FontAwesomeIcon icon={faSpinner} size="3x" />
    </span>
);
