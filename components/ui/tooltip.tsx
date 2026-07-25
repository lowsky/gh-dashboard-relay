import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react';
import * as React from 'react';

interface TooltipContentProps extends ChakraTooltip.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
    function TooltipContent(props, ref) {
        const { portalled = true, portalRef, ...rest } = props;
        return (
            <Portal disabled={!portalled} container={portalRef}>
                <ChakraTooltip.Positioner>
                    <ChakraTooltip.Content ref={ref} {...rest} />
                </ChakraTooltip.Positioner>
            </Portal>
        );
    }
);

export const TooltipArrow = React.forwardRef<HTMLDivElement, ChakraTooltip.ArrowProps>(
    function TooltipArrow(props, ref) {
        return (
            <ChakraTooltip.Arrow {...props} ref={ref}>
                <ChakraTooltip.ArrowTip />
            </ChakraTooltip.Arrow>
        );
    }
);

export const TooltipRoot = ChakraTooltip.Root;
export const TooltipTrigger = ChakraTooltip.Trigger;
