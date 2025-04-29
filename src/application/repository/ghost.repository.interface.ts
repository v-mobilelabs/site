import { PostOrPage } from "@tryghost/content-api";

export interface GhostRepository {
  findBySlug(slug: string): Promise<PostOrPage | null>;
  findByTag(slug: string): Promise<PostOrPage[]>;
  findByAuthor(authorId: string): Promise<PostOrPage[]>;
  getFeatured(): Promise<PostOrPage[]>;
  getAllPosts(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostOrPage[]>;
}
