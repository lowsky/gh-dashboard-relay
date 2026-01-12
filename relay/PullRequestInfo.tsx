import { graphql, useFragment } from 'react-relay';
import { Link } from '@chakra-ui/react';

import { type DoMergePR } from 'relay/PullRequestMerge';

import type {
    PullRequestInfo_pullRequest$data,
    PullRequestInfo_pullRequest$key,
} from './__generated__/PullRequestInfo_pullRequest.graphql';
import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';
import useMergePR from './useMergePR';

export default function PullRequestInfoFragment({
    pullRequest,
}: {
    pullRequest: PullRequestInfo_pullRequest$key | null;
}) {
    const data: PullRequestInfo_pullRequest$data | null | undefined = useFragment<PullRequestInfo_pullRequest$key>(
        graphql`
            fragment PullRequestInfo_pullRequest on PullRequest {
                id
                title
                number
                url
                headRefOid
            }
        `,
        pullRequest
    );
    const mergePR = useMergePR();

    if (!data) return null;

    const doMergePR: DoMergePR = async () => mergePR(data.headRefOid, data.id);

    return (
        <>
            <Link href={data.url} title={data.title} variant="underline">
                PR #{data.number}
            </Link>
            <MergeButtonWithErrorStatus doMergePR={doMergePR} />
        </>
    );
}
