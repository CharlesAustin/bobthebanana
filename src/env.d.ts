import type { MarkdownInstance } from "astro";

export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  description?: string; // Optional field
}

export type PostInstance = MarkdownInstance<PostFrontmatter>;
