export interface Project {
  id: number;
  name: string;
  description: string[];
  githubLink?: string;
  githubLinkFrontend?: string;
  githubLinkBackend?: string;
  liveModeLink?: string;
  images?: string[];
}
