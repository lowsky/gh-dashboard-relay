import { graphql, useMutation } from 'react-relay';
import { PayloadError } from 'relay-runtime';

import { useMergePRMutation, useMergePRMutation$data } from './__generated__/useMergePRMutation.graphql';

const MergePRMutation = graphql`
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
    const [mergePullRequest] = useMutation<useMergePRMutation>(MergePRMutation);

    return async (sha: string, id: string) =>
        new Promise<useMergePRMutation$data['mergePullRequest']>((resolve, reject) => {
            mergePullRequest({
                variables: {
                    input: {
                        pullRequestId: id,
                        expectedHeadOid: sha,
                        mergeMethod: 'REBASE',
                    },
                },
                onCompleted: (response: useMergePRMutation$data, errors: PayloadError[] | null) => {
                    if (errors) {
                        reject(errors);
                    } else {
                        resolve(response.mergePullRequest);
                    }
                },
                onError: reject,
            });
        });
}
