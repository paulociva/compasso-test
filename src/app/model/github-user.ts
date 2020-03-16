export interface GithubUser {
  id: number;
  login: string;
  email?: string;
  avatar_url: string;
  name?: string;
  updated_at?: string;
  created_at?: string;
  company?: string;
  location?: string;
  blog?: string;
}
