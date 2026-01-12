'use client';

import type { SpinnerProps } from '@chakra-ui/react';
import { Flex, Text, Spinner as ChakraSpinner } from '@chakra-ui/react';
type Props = SpinnerProps & { label?: string };

export const Spinner = ({ size, label }: Props) => (
    <Flex justify="center" align="center" gap="1em">
        <ChakraSpinner size={size} />
        {label && <Text>{label}</Text>}
    </Flex>
);
