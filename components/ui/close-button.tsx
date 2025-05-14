import type { ButtonProps as ChakraCloseButtonProps } from '@chakra-ui/react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import * as React from 'react';
import { LuX } from 'react-icons/lu';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(props, ref) {
    return (
        <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
            {props.children ?? <LuX />}
        </ChakraIconButton>
    );
});
