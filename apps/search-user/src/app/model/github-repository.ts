import {GithubUser} from './github-user';

export interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  owner: GithubUser;
  html_url?: string;
  language?: string;
  stargazers_count?: string;
  forks_count?: string;
  open_issues_count?: string;
  description?: string;
  created_at?: string;
  pushed_at?: string;
  clone_url?: string;
}
