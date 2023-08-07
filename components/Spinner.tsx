'use client';

import React from 'react';

import { CircularProgress, CircularProgressProps, Flex, Text } from '@chakra-ui/react';

type Props = Pick<CircularProgressProps, 'size'> & { label?: string };

export const Spinner = ({ size, label }: Props) => (
    <Flex justify="center" align="center" gap="1em">
        <CircularProgress isIndeterminate size={size} />
        {label && <Text>{label}</Text>}
    </Flex>
);
