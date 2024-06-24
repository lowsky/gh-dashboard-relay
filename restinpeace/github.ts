import {
    GetResponseDataTypeFromEndpointMethod,
    GetResponseTypeFromEndpointMethod,
    OctokitResponse,
} from '@octokit/types';
import { Octokit } from '@octokit/rest';

import type { GithubCommitAuthor, GithubStatus, PullRequest } from './types';

import type { GithubBranch, GithubCommit, GithubRepo, GithubUser } from '../lib/types/resolvers';

// just to use it for typedef
import { octo } from '../lib/github';

export interface User {
    login: string;
    company?: string | null;
    avatar_url: string;
}

export type Branch = {
    commit: Commit;
    name: string;
};
export type Branches = Branch[];

export interface Commit {
    sha: string;
    url: string;
}

type ListPullRequestsAssociatedWithCommitResponseType = GetResponseTypeFromEndpointMethod<
    typeof octo.repos.listPullRequestsAssociatedWithCommit
>;

export type ListPullRequestsAssociatedWithCommitResponseDataType =
    ListPullRequestsAssociatedWithCommitResponseType['data'];

export type MergePullRequestsResponseDataType = GetResponseDataTypeFromEndpointMethod<typeof octo.pulls.merge>;

export interface AuthorizedGitHub {
    fetchCommitStatuses: {
        (commit: { ownerUsername: string; reponame: string; sha: string }): Promise<GithubStatus[]>;
    };
    fetchLastCommitStatuses: (commit: {
        sha?: string | null | undefined;
        ownerUsername: string;
        reponame: string;
    }) => Promise<GithubStatus[] | never[]>;
    fetchRepoBranches: (owner: string, repo: string) => Promise<Branches>;
    fetchRepoBranchesWithCommitStatuses: ({ userName, repoName }: { userName: string; repoName: string }) => Promise<{
        owner: { login: string };
        name: string;
        branches: (Branch & {
            lastCommit: {
                associatedPullRequests?: undefined | null | (null | PullRequest)[];
                author?: undefined | null | GithubCommitAuthor | GithubUser;
                date?: undefined | null | string;
                message?: undefined | null | string;
                sha?: undefined | null | string;
                status?: undefined | null | (null | GithubStatus)[];
                statuses?: undefined | null | (null | GithubStatus)[];
            } & { reponame: string; ownerUsername: string };
        })[];
    }>;
    fetchRepoBranchesWithCommitStatusesAndPullRequests: ({
        userName,
        repoName,
    }: {
        userName: string;
        repoName: string;
    }) => Promise<{
        branches: (Branch & {
            lastCommit: {
                associatedPullRequests?: undefined | null | (null | PullRequest)[];
                author?: undefined | null | GithubCommitAuthor | GithubUser;
                date?: undefined | null | string;
                message?: undefined | null | string;
                sha?: undefined | null | string;
                status?: undefined | null | (null | GithubStatus)[];
                statuses?: undefined | null | (null | GithubStatus)[];
            } & {
                associatedPullRequests: {
                    _links: {
                        comments: { href: string };
                        commits: { href: string };
                        html: { href: string };
                        issue: { href: string };
                        review_comment: { href: string };
                        review_comments: { href: string };
                        self: { href: string };
                        statuses: { href: string };
                    };
                    active_lock_reason?: undefined | null | string;
                    assignee: null | {
                        avatar_url: string;
                        email?: undefined | null | string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: null | string;
                        html_url: string;
                        id: number;
                        login: string;
                        name?: undefined | null | string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_at?: undefined | string;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    assignees?:
                        | undefined
                        | null
                        | {
                              avatar_url: string;
                              email?: undefined | null | string;
                              events_url: string;
                              followers_url: string;
                              following_url: string;
                              gists_url: string;
                              gravatar_id: null | string;
                              html_url: string;
                              id: number;
                              login: string;
                              name?: undefined | null | string;
                              node_id: string;
                              organizations_url: string;
                              received_events_url: string;
                              repos_url: string;
                              site_admin: boolean;
                              starred_at?: undefined | string;
                              starred_url: string;
                              subscriptions_url: string;
                              type: string;
                              url: string;
                          }[];
                    author_association:
                        | 'COLLABORATOR'
                        | 'CONTRIBUTOR'
                        | 'FIRST_TIMER'
                        | 'FIRST_TIME_CONTRIBUTOR'
                        | 'MANNEQUIN'
                        | 'MEMBER'
                        | 'NONE'
                        | 'OWNER';
                    auto_merge: null | {
                        commit_message: string;
                        commit_title: string;
                        enabled_by: {
                            avatar_url: string;
                            email?: undefined | null | string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: null | string;
                            html_url: string;
                            id: number;
                            login: string;
                            name?: undefined | null | string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_at?: undefined | string;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        merge_method: 'merge' | 'squash' | 'rebase';
                    };
                    base: {
                        label: string;
                        ref: string;
                        repo: {
                            allow_auto_merge?: undefined | false | true;
                            allow_forking?: undefined | false | true;
                            allow_merge_commit?: undefined | false | true;
                            allow_rebase_merge?: undefined | false | true;
                            allow_squash_merge?: undefined | false | true;
                            allow_update_branch?: undefined | false | true;
                            anonymous_access_enabled?: undefined | false | true;
                            archive_url: string;
                            archived: boolean;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            clone_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            created_at: null | string;
                            default_branch: string;
                            delete_branch_on_merge?: undefined | false | true;
                            deployments_url: string;
                            description: null | string;
                            disabled: boolean;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks: number;
                            forks_count: number;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            has_discussions?: undefined | false | true;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_pages: boolean;
                            has_projects: boolean;
                            has_wiki: boolean;
                            homepage: null | string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            is_template?: undefined | false | true;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            language: null | string;
                            languages_url: string;
                            license: null | {
                                html_url?: undefined | string;
                                key: string;
                                name: string;
                                node_id: string;
                                spdx_id: null | string;
                                url: null | string;
                            };
                            master_branch?: undefined | string;
                            merge_commit_message?: undefined | 'PR_TITLE' | 'PR_BODY' | 'BLANK';
                            merge_commit_title?: undefined | 'PR_TITLE' | 'MERGE_MESSAGE';
                            merges_url: string;
                            milestones_url: string;
                            mirror_url: null | string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            open_issues: number;
                            open_issues_count: number;
                            owner: {
                                avatar_url: string;
                                email?: undefined | null | string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: null | string;
                                html_url: string;
                                id: number;
                                login: string;
                                name?: undefined | null | string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_at?: undefined | string;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            permissions?:
                                | undefined
                                | {
                                      admin: boolean;
                                      maintain?: undefined | false | true;
                                      pull: boolean;
                                      push: boolean;
                                      triage?: undefined | false | true;
                                  };
                            private: boolean;
                            pulls_url: string;
                            pushed_at: null | string;
                            releases_url: string;
                            size: number;
                            squash_merge_commit_message?: undefined | 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
                            squash_merge_commit_title?: undefined | 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
                            ssh_url: string;
                            stargazers_count: number;
                            stargazers_url: string;
                            starred_at?: undefined | string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            svn_url: string;
                            tags_url: string;
                            teams_url: string;
                            temp_clone_token?: undefined | string;
                            topics?: undefined | string[];
                            trees_url: string;
                            updated_at: null | string;
                            url: string;
                            use_squash_pr_title_as_default?: undefined | false | true;
                            visibility?: undefined | string;
                            watchers: number;
                            watchers_count: number;
                            web_commit_signoff_required?: undefined | false | true;
                        };
                        sha: string;
                        user: null | {
                            avatar_url: string;
                            email?: undefined | null | string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: null | string;
                            html_url: string;
                            id: number;
                            login: string;
                            name?: undefined | null | string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_at?: undefined | string;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                    };
                    body: null | string;
                    closed_at: null | string;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    diff_url: string;
                    draft?: undefined | false | true;
                    head: {
                        label: string;
                        ref: string;
                        repo: {
                            allow_auto_merge?: undefined | false | true;
                            allow_forking?: undefined | false | true;
                            allow_merge_commit?: undefined | false | true;
                            allow_rebase_merge?: undefined | false | true;
                            allow_squash_merge?: undefined | false | true;
                            allow_update_branch?: undefined | false | true;
                            anonymous_access_enabled?: undefined | false | true;
                            archive_url: string;
                            archived: boolean;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            clone_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            created_at: null | string;
                            default_branch: string;
                            delete_branch_on_merge?: undefined | false | true;
                            deployments_url: string;
                            description: null | string;
                            disabled: boolean;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks: number;
                            forks_count: number;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            has_discussions?: undefined | false | true;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_pages: boolean;
                            has_projects: boolean;
                            has_wiki: boolean;
                            homepage: null | string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            is_template?: undefined | false | true;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            language: null | string;
                            languages_url: string;
                            license: null | {
                                html_url?: undefined | string;
                                key: string;
                                name: string;
                                node_id: string;
                                spdx_id: null | string;
                                url: null | string;
                            };
                            master_branch?: undefined | string;
                            merge_commit_message?: undefined | 'PR_TITLE' | 'PR_BODY' | 'BLANK';
                            merge_commit_title?: undefined | 'PR_TITLE' | 'MERGE_MESSAGE';
                            merges_url: string;
                            milestones_url: string;
                            mirror_url: null | string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            open_issues: number;
                            open_issues_count: number;
                            owner: {
                                avatar_url: string;
                                email?: undefined | null | string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: null | string;
                                html_url: string;
                                id: number;
                                login: string;
                                name?: undefined | null | string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_at?: undefined | string;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            permissions?:
                                | undefined
                                | {
                                      admin: boolean;
                                      maintain?: undefined | false | true;
                                      pull: boolean;
                                      push: boolean;
                                      triage?: undefined | false | true;
                                  };
                            private: boolean;
                            pulls_url: string;
                            pushed_at: null | string;
                            releases_url: string;
                            size: number;
                            squash_merge_commit_message?: undefined | 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
                            squash_merge_commit_title?: undefined | 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
                            ssh_url: string;
                            stargazers_count: number;
                            stargazers_url: string;
                            starred_at?: undefined | string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            svn_url: string;
                            tags_url: string;
                            teams_url: string;
                            temp_clone_token?: undefined | string;
                            topics?: undefined | string[];
                            trees_url: string;
                            updated_at: null | string;
                            url: string;
                            use_squash_pr_title_as_default?: undefined | false | true;
                            visibility?: undefined | string;
                            watchers: number;
                            watchers_count: number;
                            web_commit_signoff_required?: undefined | false | true;
                        };
                        sha: string;
                        user: null | {
                            avatar_url: string;
                            email?: undefined | null | string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: null | string;
                            html_url: string;
                            id: number;
                            login: string;
                            name?: undefined | null | string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_at?: undefined | string;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                    };
                    html_url: string;
                    id: number;
                    issue_url: string;
                    labels: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                    locked: boolean;
                    merge_commit_sha: null | string;
                    merged_at: null | string;
                    milestone: null | {
                        closed_at: null | string;
                        closed_issues: number;
                        created_at: string;
                        creator: null | {
                            avatar_url: string;
                            email?: undefined | null | string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: null | string;
                            html_url: string;
                            id: number;
                            login: string;
                            name?: undefined | null | string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_at?: undefined | string;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        description: null | string;
                        due_on: null | string;
                        html_url: string;
                        id: number;
                        labels_url: string;
                        node_id: string;
                        number: number;
                        open_issues: number;
                        state: 'open' | 'closed';
                        title: string;
                        updated_at: string;
                        url: string;
                    };
                    node_id: string;
                    number: number;
                    patch_url: string;
                    requested_reviewers?:
                        | undefined
                        | null
                        | {
                              avatar_url: string;
                              email?: undefined | null | string;
                              events_url: string;
                              followers_url: string;
                              following_url: string;
                              gists_url: string;
                              gravatar_id: null | string;
                              html_url: string;
                              id: number;
                              login: string;
                              name?: undefined | null | string;
                              node_id: string;
                              organizations_url: string;
                              received_events_url: string;
                              repos_url: string;
                              site_admin: boolean;
                              starred_at?: undefined | string;
                              starred_url: string;
                              subscriptions_url: string;
                              type: string;
                              url: string;
                          }[];
                    requested_teams?:
                        | undefined
                        | null
                        | {
                              description: null | string;
                              html_url: string;
                              id: number;
                              members_url: string;
                              name: string;
                              node_id: string;
                              notification_setting?: undefined | string;
                              parent: null | {
                                  description: null | string;
                                  html_url: string;
                                  id: number;
                                  ldap_dn?: undefined | string;
                                  members_url: string;
                                  name: string;
                                  node_id: string;
                                  notification_setting?: undefined | string;
                                  permission: string;
                                  privacy?: undefined | string;
                                  repositories_url: string;
                                  slug: string;
                                  url: string;
                              };
                              permission: string;
                              permissions?:
                                  | undefined
                                  | {
                                        admin: boolean;
                                        maintain: boolean;
                                        pull: boolean;
                                        push: boolean;
                                        triage: boolean;
                                    };
                              privacy?: undefined | string;
                              repositories_url: string;
                              slug: string;
                              url: string;
                          }[];
                    review_comment_url: string;
                    review_comments_url: string;
                    state: string;
                    statuses_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                    user: null | {
                        avatar_url: string;
                        email?: undefined | null | string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: null | string;
                        html_url: string;
                        id: number;
                        login: string;
                        name?: undefined | null | string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_at?: undefined | string;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                }[];
                ownerUsername: string;
                reponame: string;
                statuses: GithubStatus[];
            };
        })[];
        name: string;
        owner: { login: string };
    }>;
    fetchRepoPullRequestsAssociatedWithCommit: (
        owner: string,
        repo: string,
        commit_sha: string
    ) => Promise<
        {
            _links: {
                comments: { href: string };
                commits: { href: string };
                html: { href: string };
                issue: { href: string };
                review_comment: { href: string };
                review_comments: { href: string };
                self: { href: string };
                statuses: { href: string };
            };
            active_lock_reason?: undefined | null | string;
            assignee: null | {
                avatar_url: string;
                email?: undefined | null | string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: null | string;
                html_url: string;
                id: number;
                login: string;
                name?: undefined | null | string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_at?: undefined | string;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            assignees?:
                | undefined
                | null
                | {
                      avatar_url: string;
                      email?: undefined | null | string;
                      events_url: string;
                      followers_url: string;
                      following_url: string;
                      gists_url: string;
                      gravatar_id: null | string;
                      html_url: string;
                      id: number;
                      login: string;
                      name?: undefined | null | string;
                      node_id: string;
                      organizations_url: string;
                      received_events_url: string;
                      repos_url: string;
                      site_admin: boolean;
                      starred_at?: undefined | string;
                      starred_url: string;
                      subscriptions_url: string;
                      type: string;
                      url: string;
                  }[];
            author_association:
                | 'COLLABORATOR'
                | 'CONTRIBUTOR'
                | 'FIRST_TIMER'
                | 'FIRST_TIME_CONTRIBUTOR'
                | 'MANNEQUIN'
                | 'MEMBER'
                | 'NONE'
                | 'OWNER';
            auto_merge: null | {
                commit_message: string;
                commit_title: string;
                enabled_by: {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                merge_method: 'merge' | 'squash' | 'rebase';
            };
            base: {
                label: string;
                ref: string;
                repo: {
                    allow_auto_merge?: undefined | false | true;
                    allow_forking?: undefined | false | true;
                    allow_merge_commit?: undefined | false | true;
                    allow_rebase_merge?: undefined | false | true;
                    allow_squash_merge?: undefined | false | true;
                    allow_update_branch?: undefined | false | true;
                    anonymous_access_enabled?: undefined | false | true;
                    archive_url: string;
                    archived: boolean;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    clone_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    created_at: null | string;
                    default_branch: string;
                    delete_branch_on_merge?: undefined | false | true;
                    deployments_url: string;
                    description: null | string;
                    disabled: boolean;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks: number;
                    forks_count: number;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    has_discussions?: undefined | false | true;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_pages: boolean;
                    has_projects: boolean;
                    has_wiki: boolean;
                    homepage: null | string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_template?: undefined | false | true;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    language: null | string;
                    languages_url: string;
                    license: null | {
                        html_url?: undefined | string;
                        key: string;
                        name: string;
                        node_id: string;
                        spdx_id: null | string;
                        url: null | string;
                    };
                    master_branch?: undefined | string;
                    merge_commit_message?: undefined | 'PR_TITLE' | 'PR_BODY' | 'BLANK';
                    merge_commit_title?: undefined | 'PR_TITLE' | 'MERGE_MESSAGE';
                    merges_url: string;
                    milestones_url: string;
                    mirror_url: null | string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    open_issues: number;
                    open_issues_count: number;
                    owner: {
                        avatar_url: string;
                        email?: undefined | null | string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: null | string;
                        html_url: string;
                        id: number;
                        login: string;
                        name?: undefined | null | string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_at?: undefined | string;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    permissions?:
                        | undefined
                        | {
                              admin: boolean;
                              maintain?: undefined | false | true;
                              pull: boolean;
                              push: boolean;
                              triage?: undefined | false | true;
                          };
                    private: boolean;
                    pulls_url: string;
                    pushed_at: null | string;
                    releases_url: string;
                    size: number;
                    squash_merge_commit_message?: undefined | 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
                    squash_merge_commit_title?: undefined | 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
                    ssh_url: string;
                    stargazers_count: number;
                    stargazers_url: string;
                    starred_at?: undefined | string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    svn_url: string;
                    tags_url: string;
                    teams_url: string;
                    temp_clone_token?: undefined | string;
                    topics?: undefined | string[];
                    trees_url: string;
                    updated_at: null | string;
                    url: string;
                    use_squash_pr_title_as_default?: undefined | false | true;
                    visibility?: undefined | string;
                    watchers: number;
                    watchers_count: number;
                    web_commit_signoff_required?: undefined | false | true;
                };
                sha: string;
                user: null | {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
            };
            body: null | string;
            closed_at: null | string;
            comments_url: string;
            commits_url: string;
            created_at: string;
            diff_url: string;
            draft?: undefined | false | true;
            head: {
                label: string;
                ref: string;
                repo: {
                    allow_auto_merge?: undefined | false | true;
                    allow_forking?: undefined | false | true;
                    allow_merge_commit?: undefined | false | true;
                    allow_rebase_merge?: undefined | false | true;
                    allow_squash_merge?: undefined | false | true;
                    allow_update_branch?: undefined | false | true;
                    anonymous_access_enabled?: undefined | false | true;
                    archive_url: string;
                    archived: boolean;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    clone_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    created_at: null | string;
                    default_branch: string;
                    delete_branch_on_merge?: undefined | false | true;
                    deployments_url: string;
                    description: null | string;
                    disabled: boolean;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks: number;
                    forks_count: number;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    has_discussions?: undefined | false | true;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_pages: boolean;
                    has_projects: boolean;
                    has_wiki: boolean;
                    homepage: null | string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_template?: undefined | false | true;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    language: null | string;
                    languages_url: string;
                    license: null | {
                        html_url?: undefined | string;
                        key: string;
                        name: string;
                        node_id: string;
                        spdx_id: null | string;
                        url: null | string;
                    };
                    master_branch?: undefined | string;
                    merge_commit_message?: undefined | 'PR_TITLE' | 'PR_BODY' | 'BLANK';
                    merge_commit_title?: undefined | 'PR_TITLE' | 'MERGE_MESSAGE';
                    merges_url: string;
                    milestones_url: string;
                    mirror_url: null | string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    open_issues: number;
                    open_issues_count: number;
                    owner: {
                        avatar_url: string;
                        email?: undefined | null | string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: null | string;
                        html_url: string;
                        id: number;
                        login: string;
                        name?: undefined | null | string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_at?: undefined | string;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    permissions?:
                        | undefined
                        | {
                              admin: boolean;
                              maintain?: undefined | false | true;
                              pull: boolean;
                              push: boolean;
                              triage?: undefined | false | true;
                          };
                    private: boolean;
                    pulls_url: string;
                    pushed_at: null | string;
                    releases_url: string;
                    size: number;
                    squash_merge_commit_message?: undefined | 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
                    squash_merge_commit_title?: undefined | 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
                    ssh_url: string;
                    stargazers_count: number;
                    stargazers_url: string;
                    starred_at?: undefined | string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    svn_url: string;
                    tags_url: string;
                    teams_url: string;
                    temp_clone_token?: undefined | string;
                    topics?: undefined | string[];
                    trees_url: string;
                    updated_at: null | string;
                    url: string;
                    use_squash_pr_title_as_default?: undefined | false | true;
                    visibility?: undefined | string;
                    watchers: number;
                    watchers_count: number;
                    web_commit_signoff_required?: undefined | false | true;
                };
                sha: string;
                user: null | {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
            };
            html_url: string;
            id: number;
            issue_url: string;
            labels: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
            locked: boolean;
            merge_commit_sha: null | string;
            merged_at: null | string;
            milestone: null | {
                closed_at: null | string;
                closed_issues: number;
                created_at: string;
                creator: null | {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                description: null | string;
                due_on: null | string;
                html_url: string;
                id: number;
                labels_url: string;
                node_id: string;
                number: number;
                open_issues: number;
                state: 'open' | 'closed';
                title: string;
                updated_at: string;
                url: string;
            };
            node_id: string;
            number: number;
            patch_url: string;
            requested_reviewers?:
                | undefined
                | null
                | {
                      avatar_url: string;
                      email?: undefined | null | string;
                      events_url: string;
                      followers_url: string;
                      following_url: string;
                      gists_url: string;
                      gravatar_id: null | string;
                      html_url: string;
                      id: number;
                      login: string;
                      name?: undefined | null | string;
                      node_id: string;
                      organizations_url: string;
                      received_events_url: string;
                      repos_url: string;
                      site_admin: boolean;
                      starred_at?: undefined | string;
                      starred_url: string;
                      subscriptions_url: string;
                      type: string;
                      url: string;
                  }[];
            requested_teams?:
                | undefined
                | null
                | {
                      description: null | string;
                      html_url: string;
                      id: number;
                      members_url: string;
                      name: string;
                      node_id: string;
                      notification_setting?: undefined | string;
                      parent: null | {
                          description: null | string;
                          html_url: string;
                          id: number;
                          ldap_dn?: undefined | string;
                          members_url: string;
                          name: string;
                          node_id: string;
                          notification_setting?: undefined | string;
                          permission: string;
                          privacy?: undefined | string;
                          repositories_url: string;
                          slug: string;
                          url: string;
                      };
                      permission: string;
                      permissions?:
                          | undefined
                          | {
                                admin: boolean;
                                maintain: boolean;
                                pull: boolean;
                                push: boolean;
                                triage: boolean;
                            };
                      privacy?: undefined | string;
                      repositories_url: string;
                      slug: string;
                      url: string;
                  }[];
            review_comment_url: string;
            review_comments_url: string;
            state: string;
            statuses_url: string;
            title: string;
            updated_at: string;
            url: string;
            user: null | {
                avatar_url: string;
                email?: undefined | null | string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: null | string;
                html_url: string;
                id: number;
                login: string;
                name?: undefined | null | string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_at?: undefined | string;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        }[]
    >;
    fetchUser: (username: string) => Promise<User>;
    getBranchesForRepo: (username: string, reponame: string) => Promise<GithubBranch[]>;
    getCommitsForRepo: (username: string, reponame: string, sha?: string) => Promise<GithubCommit[]>;
    getLastCommit: (
        ownerUsername: string,
        reponame: string,
        sha: string
    ) => Promise<
        GithubCommit & {
            date?: string;
            message: string;
            ownerUsername: string;
            reponame: string;
        }
    >;
    getRepoForUser: (username: string, reponame: string) => Promise<GithubRepo>;
    getStatusesForRepo: (owner: string, repo: string, sha: string) => Promise<GithubStatus[]>;
    getUser: (username: string) => Promise<GithubUser>;
    mergePullRequest: {
        (__0: {
            merge_method?: undefined | 'merge' | 'rebase';
            owner: string;
            pull_number: number;
            repo: string;
            sha?: undefined | string;
        }): Promise<{ merged: boolean; message: string; sha: string }>;
    };
}

type RestGithubCommitsListItem = {
    author: null | {
        avatar_url: string;
        email?: undefined | null | string;
        events_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: null | string;
        html_url: string;
        id: number;
        login: string;
        name?: undefined | null | string;
        node_id: string;
        organizations_url: string;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_at?: undefined | string;
        starred_url: string;
        subscriptions_url: string;
        type: string;
        url: string;
    };
    comments_url: string;
    commit: {
        author: null | { date?: undefined | string; email?: undefined | string; name?: undefined | string };
        comment_count: number;
        committer: null | { date?: undefined | string; email?: undefined | string; name?: undefined | string };
        message: string;
        tree: { sha: string; url: string };
        url: string;
        verification?:
            | undefined
            | {
                  payload: null | string;
                  reason: string;
                  signature: null | string;
                  verified: boolean;
              };
    };
    committer: null | {
        avatar_url: string;
        email?: undefined | null | string;
        events_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: null | string;
        html_url: string;
        id: number;
        login: string;
        name?: undefined | null | string;
        node_id: string;
        organizations_url: string;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_at?: undefined | string;
        starred_url: string;
        subscriptions_url: string;
        type: string;
        url: string;
    };
    files?:
        | undefined
        | {
              additions: number;
              blob_url: string;
              changes: number;
              contents_url: string;
              deletions: number;
              filename: string;
              patch?: undefined | string;
              previous_filename?: undefined | string;
              raw_url: string;
              sha: string;
              status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';
          }[];
    html_url: string;
    node_id: string;
    parents: { html_url?: undefined | string; sha: string; url: string }[];
    sha: string;
    stats?:
        | undefined
        | {
              additions?: undefined | number;
              deletions?: undefined | number;
              total?: undefined | number;
          };
    url: string;
};

/**
 * Factory, to make octokit injectable
 *
 * @param octoOptional
 */
export function getAuthorizedGitHub(octoOptional: Octokit): AuthorizedGitHub {
    const octo = octoOptional;

    const getCommitsForRepo = async (
        username: string,
        reponame: string,
        sha?: string
    ): Promise<Array<RestGithubCommitsListItem>> => {
        const commits: OctokitResponse<
            {
                author: null | {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                comments_url: string;
                commit: {
                    author: null | { date?: undefined | string; email?: undefined | string; name?: undefined | string };
                    comment_count: number;
                    committer: null | {
                        date?: undefined | string;
                        email?: undefined | string;
                        name?: undefined | string;
                    };
                    message: string;
                    tree: { sha: string; url: string };
                    url: string;
                    verification?:
                        | undefined
                        | {
                              payload: null | string;
                              reason: string;
                              signature: null | string;
                              verified: boolean;
                          };
                };
                committer: null | {
                    avatar_url: string;
                    email?: undefined | null | string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: null | string;
                    html_url: string;
                    id: number;
                    login: string;
                    name?: undefined | null | string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_at?: undefined | string;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                files?:
                    | undefined
                    | {
                          additions: number;
                          blob_url: string;
                          changes: number;
                          contents_url: string;
                          deletions: number;
                          filename: string;
                          patch?: undefined | string;
                          previous_filename?: undefined | string;
                          raw_url: string;
                          sha: string;
                          status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';
                      }[];
                html_url: string;
                node_id: string;
                parents: { html_url?: undefined | string; sha: string; url: string }[];
                sha: string;
                stats?:
                    | undefined
                    | {
                          additions?: undefined | number;
                          deletions?: undefined | number;
                          total?: undefined | number;
                      };
                url: string;
            }[],
            200
        > = await octo.repos.listCommits({
            sha,
            owner: username,
            repo: reponame,
        });
        return commits.data;
    };

    const getStatusesForRepo = async (owner: string, repo: string, sha: string): Promise<Array<GithubStatus>> => {
        let repos = octo.repos;
        const statuses = await repos.listCommitStatusesForRef({
            ref: sha,
            repo,
            owner,
        });

        return statuses.data;
    };

    const mergePullRequest: ({
        owner,
        repo,
        pull_number,
        sha,
        merge_method,
    }: {
        owner: string;
        repo: string;
        pull_number: number;
        sha?: string;
        merge_method?: 'rebase' | 'merge';
    }) => Promise<MergePullRequestsResponseDataType> = async ({
        owner,
        repo,
        pull_number,
        sha,
        merge_method = 'rebase',
    }: {
        owner: string;
        repo: string;
        pull_number: number;
        sha?: string;
        merge_method?: 'rebase' | 'merge';
    }): Promise<MergePullRequestsResponseDataType> => {
        const response = await octo.pulls.merge({
            owner,
            repo,
            merge_method,
            sha,
            pull_number,
        });
        return response.data;
    };

    async function getLastCommit(
        ownerUsername: string,
        reponame: string,
        sha: string
    ): Promise<
        GithubCommit & {
            message: string;
            date?: string;
            ownerUsername: string;
            reponame: string;
        }
    > {
        const commits = await getCommitsForRepo(ownerUsername, reponame, sha);
        const commit = commits[0];

        const message = commit.commit.message;
        const date = commit.commit.committer?.date;
        return {
            ...commit,
            message,
            date,
            ownerUsername,
            reponame,
        };
    }

    const fetchCommitStatuses: (commit: {
        reponame: string;
        ownerUsername: string;
        sha: string;
    }) => Promise<Array<GithubStatus>> = async (commit: { reponame: string; ownerUsername: string; sha: string }) => {
        const { sha, ownerUsername, reponame } = commit;

        if (!sha) {
            return [];
        }

        return (await getStatusesForRepo(ownerUsername, reponame, sha)) ?? [];
    };

    /**
     * Fetch the branches for a given repo
     *
     * @param owner user's login name, e.g. lowsky
     * @param repo repo's name
     */
    const fetchRepoBranches = async (owner: string, repo: string): Promise<Branches> => {
        const listBranches = octo.repos.listBranches({ owner, repo });
        const branches = await listBranches;
        return branches.data;
    };

    /**
     * Fetch the user info for a given login
     *
     * @param username user's login name, e.g. lowsky
     */
    const fetchUser = async (username: string): Promise<User> =>
        await octo.users.getByUsername({ username }).then((response) => response.data);

    async function fetchRepoBranchesWithCommitStatusesAndPullRequests({
        userName,
        repoName,
    }: {
        userName: string;
        repoName: string;
    }): Promise<{
        owner: { login: string };
        name: string;
        branches: Awaited<
            Branch & {
                lastCommit: GithubCommit & {
                    reponame: string;
                    ownerUsername: string;
                    statuses: Array<GithubStatus>;
                    associatedPullRequests: ListPullRequestsAssociatedWithCommitResponseDataType;
                };
            }
        >[];
    }> {
        const branches: Branches = await fetchRepoBranches(userName, repoName);

        const branchesWithCommitProms = branches.map(async (branch) => {
            const { sha } = branch.commit;

            const lastCommit: GithubCommit & {
                message: string;
                date?: string;
                ownerUsername: string;
                reponame: string;
            } = await getLastCommit(userName, repoName, sha);

            const statuses: Array<GithubStatus> = await fetchLastCommitStatuses(lastCommit);

            const associatedPullRequests: ListPullRequestsAssociatedWithCommitResponseDataType =
                await fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha);

            return {
                ...branch,
                lastCommit: {
                    ...lastCommit,
                    statuses,
                    associatedPullRequests,
                },
            };
        });

        return {
            name: repoName,
            owner: { login: userName },
            branches: await Promise.all(branchesWithCommitProms),
        };
    }

    async function fetchRepoBranchesWithCommitStatuses({
        userName,
        repoName,
    }: {
        userName: string;
        repoName: string;
    }): Promise<{
        owner: { login: string };
        name: string;
        branches: Awaited<
            Branch & {
                lastCommit: GithubCommit & {
                    reponame: string;
                    ownerUsername: string;
                };
            }
        >[];
    }> {
        const branches = await fetchRepoBranches(userName, repoName);

        const branchesWithCommitProms = branches?.reverse().map(async (branch) => {
            const { sha } = branch.commit;

            const lastCommit = await getLastCommit(userName, repoName, sha);
            const statuses = await fetchLastCommitStatuses(lastCommit);

            return {
                ...branch,
                lastCommit: {
                    ...lastCommit,
                    statuses,
                },
            };
        });

        return {
            name: repoName,
            owner: { login: userName },
            branches: await Promise.all(branchesWithCommitProms),
        };
    }

    async function fetchLastCommitStatuses(commit: {
        sha?: string | null | undefined;
        ownerUsername: string;
        reponame: string;
    }) {
        const { sha, ownerUsername, reponame } = commit;
        if (sha) {
            return await fetchCommitStatuses({
                sha,
                ownerUsername,
                reponame,
            });
        }
        return [];
    }

    const fetchRepoPullRequestsAssociatedWithCommit = async (
        owner: string,
        repo: string,
        commit_sha: string
    ): Promise<ListPullRequestsAssociatedWithCommitResponseDataType> => {
        const pulls: ListPullRequestsAssociatedWithCommitResponseType =
            await octo.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha });
        return pulls.data;
    };

    return {
        fetchLastCommitStatuses,
        fetchRepoBranchesWithCommitStatuses,
        fetchUser,
        fetchCommitStatuses,
        fetchRepoBranches,
        mergePullRequest,

        fetchRepoBranchesWithCommitStatusesAndPullRequests,

        fetchRepoPullRequestsAssociatedWithCommit,
        getCommitsForRepo,
        getLastCommit,
        getStatusesForRepo,
        /**/
        getBranchesForRepo: async (username, reponame): Promise<Array<GithubBranch>> => {
            const branches = await octo.repos.listBranches({
                owner: username,
                repo: reponame,
            });
            return branches.data;
        },
        getRepoForUser: async (username, reponame): Promise<GithubRepo> => {
            const { data } = await octo.repos.get({ repo: reponame, owner: username });
            return { ...convertItsIdToString(data), owner: convertItsIdToString(data.owner) };
        },
        getUser: async (username: string): Promise<GithubUser> => {
            try {
                const { data } = await octo.users.getByUsername({ username });
                return convertItsIdToString(data);
            } catch (err) {
                console.log('get User ', username, err);
            }
            return {};
        },
    };
}

export function convertItsIdToString<T>(obj: any & { id: number }): T & { id: String } {
    return {
        ...obj,
        id: String(obj.id),
    };
}
