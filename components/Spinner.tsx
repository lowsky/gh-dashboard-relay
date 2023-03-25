import React from 'react';

import { CircularProgress, CircularProgressProps } from '@chakra-ui/react';

type Props = Pick<CircularProgressProps, 'size'>;
export const Spinner = ({ size }: Props) => <CircularProgress isIndeterminate size={size} />;
