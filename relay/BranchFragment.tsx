import { graphql, useFragment } from 'react-relay';

import { BranchFragment_branch$key } from './__generated__/BranchFragment_branch.graphql';

export function BranchFragment({ node }: { node: BranchFragment_branch$key }) {
    const data = useFragment(
        graphql`
            fragment BranchFragment_branch on Ref {
                name
                id
                # associatedPullRequests
                associatedPullRequests(first: 2) {
                    totalCount
                    nodes {
                        headRefName
                        title
                        # url checksUrl mergeable merged locked viewerCanEnableAutoMerge isDraft closed isInMergeQueue isReadByViewer
                    }
                }
                target {
                    ... on Commit {
                        message
                        status {
                            id
                            combinedContexts {
                                totalCount
                            }
                            contexts {
                                context
                            }
                        }
                    }
                    commitUrl # full
                    # short commitResourcePath
                    oid #full
                    # abbreviatedOid
                }
            }
        `,
        node
    );
    console.log(data);

    return <> {data?.name}</>;
}
