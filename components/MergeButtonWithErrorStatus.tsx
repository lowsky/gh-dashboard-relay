import React from 'react';
import { Button, Icon, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MergeButtonWithErrorStatus({
    errorObject,
    triggerMerging,
    mergingInProgress,
}: {
    errorObject: Error | undefined;
    triggerMerging: () => any;
    mergingInProgress: Promise<unknown> | undefined;
}) {
    const isError = Boolean(errorObject);
    const isMergingInProgress = Boolean(mergingInProgress);
    return (
        <>
            {!isError && (
                <Button ml={1} size="xs" variant="outline" onClick={triggerMerging} isDisabled={isMergingInProgress}>
                    Rebase&Merge
                    {isMergingInProgress && (
                        <Icon>
                            <FontAwesomeIcon icon={faSpinner} size="1x" />
                        </Icon>
                    )}
                </Button>
            )}
            {isError && (
                <Popover trigger="hover">
                    <PopoverTrigger>
                        <Button
                            ml={1}
                            size="xs"
                            color={'red'}
                            variant="outline"
                            onClick={triggerMerging}
                            isDisabled={!!mergingInProgress}>
                            Rebase&Merge
                            {!!mergingInProgress && (
                                <Icon>
                                    <FontAwesomeIcon icon={faSpinner} size="1x" />
                                </Icon>
                            )}
                            <Icon ml={1}>
                                <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                            </Icon>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody background={'red'}>
                            <Icon mr={1}>
                                <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                            </Icon>
                            <i>{errorObject?.message ?? 'unsuccessful.'}</i>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
        </>
    );
}
