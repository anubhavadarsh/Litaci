import { get } from './base';

export const Repos = {
  index: (signal: AbortSignal) =>
    get('users/anubhavadarsh/repos', {
      headers: {
        'Content-type': 'application/vnd.github+json',
      },
      signal,
    }),
  single: (repo: string, signal: AbortSignal) =>
    get(`repos/anubhavadarsh/${repo}`, {
      headers: {
        'Content-type': 'application/vnd.github+json',
      },
      signal,
    }),
  singlelanguages: (repo: string, signal: AbortSignal) =>
    get(`repos/anubhavadarsh/${repo}/languages`, {
      headers: {
        'Content-type': 'application/vnd.github+json',
      },
      signal,
    }),
  singleContentReadme: (repo: string, signal: AbortSignal) =>
    get(`repos/anubhavadarsh/${repo}/contents/README.md`, {
      headers: {
        Accept: 'application/vnd.github.raw',
        'Content-type': 'application/vnd.github.raw',
      },
      signal,
    }),
};

export interface IRepoResponse {
  allow_forking: boolean;
  archive_url: URL;
  archived: boolean;
  assignees_url: URL;
  blobs_url: URL;
  branches_url: URL;
  clone_url: URL;
  collaborators_url: URL;
  comments_url: URL;
  commits_url: URL;
  compare_url: URL;
  contents_url: URL;
  contributors_url: URL;
  created_at: string;
  default_branch: string;
  deployments_url: URL;
  description: string | null;
  disabled: boolean;
  downloads_url: URL;
  events_url: URL;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: URL;
  full_name: string;
  git_commits_url: URL;
  git_refs_url: URL;
  git_tags_url: URL;
  git_url: URL;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: URL;
  html_url: URL;
  id: number;
  is_template: boolean;
  issue_comment_url: URL;
  issue_events_url: URL;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | null;
  languages_url: URL;
  license: {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
    url: URL;
  } | null;
  merges_url: URL;
  milestones_url: URL;
  mirror_url: URL | null;
  name: string;
  node_id: string;
  notifications_url: URL;
  open_issues: number;
  open_issues_count: number;
  owner: {
    avatar_url: URL;
    events_url: URL;
    followers_url: URL;
    following_url: URL;
    gists_url: URL;
    gravatar_id: '';
    html_url: URL;
    id: number;
    login: string;
    node_id: string;
    organizations_url: URL;
    received_events_url: URL;
    repos_url: URL;
    site_admin: false;
    starred_url: URL;
    subscriptions_url: URL;
    type: string;
    url: URL;
  };
  permissions: {
    admin: boolean;
    maintain: boolean;
    pull: boolean;
    push: boolean;
    triage: boolean;
  };
  private: boolean;
  pulls_url: URL;
  pushed_at: string;
  releases_url: URL;
  size: number;
  ssh_url: URL;
  stargazers_count: number;
  stargazers_url: URL;
  statuses_url: URL;
  subscribers_url: URL;
  subscription_url: URL;
  svn_url: URL;
  tags_url: URL;
  teams_url: URL;
  topics: string[];
  trees_url: URL;
  updated_at: string;
  url: URL;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}

export type IRepo = Pick<
  IRepoResponse,
  | 'id'
  | 'created_at'
  | 'description'
  | 'html_url'
  | 'language'
  | 'stargazers_count'
  | 'name'
  | 'topics'
>;
