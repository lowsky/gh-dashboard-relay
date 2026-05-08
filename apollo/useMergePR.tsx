import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';

import { UseMergePrMutationMutation } from 'app/apollo/__gen__/graphql';

const MergePRMutation = gql`
    mutation useMergePRMutation($input: MergePullRequestInput!) {
        mergePullRequest(input: $input) {
            pullRequest {
                merged
                state
                mergeStateStatus
            }
        }
    }
`;

export default function useMergePR() {
    const [mergePullRequest] = useMutation<UseMergePrMutationMutation>(MergePRMutation);

    return async (sha: string, id: string) =>
        new Promise<UseMergePrMutationMutation>((resolve, reject) => {
            mergePullRequest({
                variables: {
                    input: {
                        pullRequestId: id,
                        expectedHeadOid: sha,
                        mergeMethod: 'REBASE',
                    },
                },
                onCompleted: (data: UseMergePrMutationMutation) => {
                    resolve(data);
                },
                onError: reject,
            });
        });
}
