'use client';

import { Flex, Text, SpinnerProps, Spinner as ChakraSpinner } from '@chakra-ui/react';
import React from 'react';

type Props = SpinnerProps & { label?: string };

export const Spinner = ({ size, label }: Props) => (
    <Flex justify="center" align="center" gap="1em">
        <ChakraSpinner size={size} />
        {label && <Text>{label}</Text>}
    </Flex>
);
