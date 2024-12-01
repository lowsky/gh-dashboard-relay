import type { ButtonProps, InputProps } from '@chakra-ui/react';
import { Button, Clipboard as ChakraClipboard, IconButton, Input } from '@chakra-ui/react';
import * as React from 'react';
import { LuCheck, LuClipboard, LuLink } from 'react-icons/lu';

const ClipboardIcon = React.forwardRef<HTMLDivElement, ChakraClipboard.IndicatorProps>(
    function ClipboardIcon(props, ref) {
        return (
            // @ts-expect-error no children
            <ChakraClipboard.Indicator copied={<LuCheck />} {...props} ref={ref}>
                <LuClipboard />
            </ChakraClipboard.Indicator>
        );
    }
);

const ClipboardCopyText = React.forwardRef<HTMLDivElement, ChakraClipboard.IndicatorProps>(
    function ClipboardCopyText(props, ref) {
        return (
            // @ts-expect-error no children
            <ChakraClipboard.Indicator copied="Copied" {...props} ref={ref}>
                Copy
            </ChakraClipboard.Indicator>
        );
    }
);

export const ClipboardLabel = React.forwardRef<HTMLLabelElement, ChakraClipboard.LabelProps>(
    function ClipboardLabel(props, ref) {
        return (
            <ChakraClipboard.Label
                // @ts-expect-error no textStyle
                textStyle="sm"
                fontWeight="medium"
                display="inline-block"
                mb="1"
                {...props}
                ref={ref}
            />
        );
    }
);

export const ClipboardButton = React.forwardRef<HTMLButtonElement, ButtonProps>(function ClipboardButton(props, ref) {
    return (
        // @ts-expect-error no children
        <ChakraClipboard.Trigger asChild>
            <Button ref={ref} size="sm" variant="surface" {...props}>
                <ClipboardIcon />
                <ClipboardCopyText />
            </Button>
        </ChakraClipboard.Trigger>
    );
});

export const ClipboardLink = React.forwardRef<HTMLButtonElement, ButtonProps>(function ClipboardLink(props, ref) {
    return (
        // @ts-expect-error no children
        <ChakraClipboard.Trigger asChild>
            <Button
                unstyled
                variant="plain"
                size="xs"
                display="inline-flex"
                alignItems="center"
                gap="2"
                ref={ref}
                {...props}>
                <LuLink />
                <ClipboardCopyText />
            </Button>
        </ChakraClipboard.Trigger>
    );
});

export const ClipboardIconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function ClipboardIconButton(props, ref) {
        return (
            // @ts-expect-error no children
            <ChakraClipboard.Trigger asChild>
                <IconButton ref={ref} size="xs" variant="subtle" {...props}>
                    <ClipboardIcon />

                    {
                        // @ts-expect-error no srOnly
                        <ClipboardCopyText srOnly />
                    }
                </IconButton>
            </ChakraClipboard.Trigger>
        );
    }
);

export const ClipboardInput = React.forwardRef<HTMLInputElement, InputProps>(
    function ClipboardInputElement(props, ref) {
        return (
            // @ts-expect-error no children
            <ChakraClipboard.Input asChild>
                <Input ref={ref} {...props} />
            </ChakraClipboard.Input>
        );
    }
);

export const ClipboardRoot = ChakraClipboard.Root;
