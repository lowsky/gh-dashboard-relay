import { Switch as ChakraSwitch } from '@chakra-ui/react';
import React from 'react';
import { forwardRef, InputHTMLAttributes, ReactNode, RefObject } from 'react';

export interface SwitchProps extends ChakraSwitch.RootProps {
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    rootRef?: RefObject<HTMLLabelElement | null>;
    trackLabel?: { on: ReactNode; off: ReactNode };
    thumbLabel?: { on: ReactNode; off: ReactNode };
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, ref) {
    const { inputProps, children, rootRef, trackLabel, thumbLabel, ...rest } = props;

    return (
        <ChakraSwitch.Root ref={rootRef} {...rest}>
            <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
            <ChakraSwitch.Control>
                <ChakraSwitch.Thumb>
                    {thumbLabel && (
                        <ChakraSwitch.ThumbIndicator fallback={thumbLabel.off}>
                            {thumbLabel.on}
                        </ChakraSwitch.ThumbIndicator>
                    )}
                </ChakraSwitch.Thumb>
                {trackLabel && (
                    <ChakraSwitch.Indicator fallback={trackLabel.off}>{trackLabel.on}</ChakraSwitch.Indicator>
                )}
            </ChakraSwitch.Control>
            {children && <ChakraSwitch.Label>{children}</ChakraSwitch.Label>}
        </ChakraSwitch.Root>
    );
});
