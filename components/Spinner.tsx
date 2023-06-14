'use client';

import React from 'react';

import { CircularProgress, CircularProgressProps , Text} from '@chakra-ui/react';

type Props = Pick<CircularProgressProps, 'size'> & { label?: string };

export const Spinner = ({ size, label }: Props) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress isIndeterminate size={size} />
        {label && <Text ml={'1em'}>{label}</Text>}
    </div>
);
