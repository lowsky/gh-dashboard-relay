'use client';
import React, { useEffect, useState } from 'react';

import { Button, Icon } from '@chakra-ui/react';
import { faCheck, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MergePullRequestsResponseDataType } from '../restinpeace/github';
import { DoMergePR } from './PullRequestMerge';
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverBody } from './ui/popover';

export function MergeButtonWithErrorStatus({ doMergePR }: { doMergePR?: DoMergePR }) {
    const [mergingInProgress, setMergingInProgress] = useState<Promise<MergePullRequestsResponseDataType | null>>();
    const [isMerged, setIsMerged] = useState(false);
    const [errorObject, setErrorObject] = useState<Error>();

    function logAndSetError(errorObject: Error) {
        console.error('Unsuccessful attempt to merge PR', errorObject.message);
        setErrorObject(errorObject);
    }

    useEffect(() => {
        if (mergingInProgress) {
            setErrorObject(undefined);
            mergingInProgress
                .then(() => setIsMerged(true))
                .catch((err) => logAndSetError(err))
                .finally(() => setMergingInProgress(undefined));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mergingInProgress]);

    const triggerMerging = () => setMergingInProgress(doMergePR?.());

    const isError = Boolean(errorObject);
    const isMergingInProgress = Boolean(mergingInProgress);

    return (
        <>
            {isMerged && (
                <Icon>
                    <FontAwesomeIcon icon={faCheck} size="1x" />
                </Icon>
            )}

            {!isMerged && Boolean(doMergePR) && !isError && (
                <Button ml={1} size="xs" variant="outline" onClick={triggerMerging} disabled={isMergingInProgress}>
                    Rebase&Merge
                    {isMergingInProgress && (
                        <Icon>
                            <FontAwesomeIcon icon={faSpinner} size="1x" />
                        </Icon>
                    )}
                </Button>
            )}
            {isError && (
                <PopoverRoot>
                    <PopoverTrigger>
                        <Button
                            ml={1}
                            size="xs"
                            color={'red'}
                            variant="outline"
                            onClick={triggerMerging}
                            disabled={!!mergingInProgress}>
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
                    {
                        // @ts-expect-error snippet type error
                        <PopoverContent>
                            <PopoverBody background={'red'}>
                                <Icon mr={1}>
                                    <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                                </Icon>
                                <i>{errorObject?.message ?? 'unsuccessful.'}</i>
                            </PopoverBody>
                        </PopoverContent>
                    }
                </PopoverRoot>
            )}
        </>
    );
}
