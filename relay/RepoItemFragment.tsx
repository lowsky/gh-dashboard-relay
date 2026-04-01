import { graphql, useFragment } from 'react-relay';
import { Badge, Icon, Link, ListItem, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import InternalLink from 'components/InternalLink';
import { RepoItemFragment_repo$key } from 'relay/__generated__/RepoItemFragment_repo.graphql';

export function RepoItemFragment({ repo }: { repo: RepoItemFragment_repo$key }) {
    const data = useFragment<RepoItemFragment_repo$key>(
        graphql`
            fragment RepoItemFragment_repo on Repository @refetchable(queryName: "RepoItemRefetchFragment") {
                name
                nameWithOwner
                isFork
                url
                pullRequests(first: 1, states: [OPEN]) {
                    totalCount
                }
            }
        `,
        repo
    );
    if (!data) return null;

    const { name, nameWithOwner, pullRequests, url, isFork } = data;
    const { totalCount } = pullRequests;

    return (
        <ListItem alignItems="center" gap="1">
            <InternalLink prefetch={false} href={'./' + nameWithOwner}>
                {name}
            </InternalLink>
            {isFork && <Badge>fork</Badge>}
            {totalCount > 0 && (
                <>
                    <span> - {totalCount} PRs</span>
                    <Link href={url} rel="noopener noreferrer nofollow" target="_blank">
                        - <Text> open in GitHub</Text>
                        <Icon ml={1}>
                            <FontAwesomeIcon icon={faCodePullRequest} />
                        </Icon>
                    </Link>
                </>
            )}
        </ListItem>
    );
}
