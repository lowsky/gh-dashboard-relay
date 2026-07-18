import { Badge, Icon, Link, ListItem, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import InternalLink from 'components/InternalLink';

interface RepoItemProps {
    hideIfFork?: boolean;
    repo: {
        name: string;
        nameWithOwner: string;
        isFork: boolean;
        url: string;
        pullRequests: {
            totalCount: number;
        };
    };
}

export function RepoItem({ repo, hideIfFork }: RepoItemProps) {
    const { name, nameWithOwner, pullRequests, url, isFork } = repo;
    const { totalCount } = pullRequests;

    if (isFork && hideIfFork) return null;

    return (
        <ListItem alignItems="center" gap="1">
            <InternalLink prefetch={false} href={'./' + nameWithOwner}>
                {name}
            </InternalLink>

            {isFork && <Badge>fork</Badge>}
            {totalCount > 0 && <span> - {totalCount} PRs</span>}
            {totalCount > 0 && (
                <Link href={url} rel="noopener noreferrer nofollow" target="_blank">
                    - <Text> open in GitHub</Text>
                    <Icon ml={1}>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                    </Icon>
                </Link>
            )}
        </ListItem>
    );
}
