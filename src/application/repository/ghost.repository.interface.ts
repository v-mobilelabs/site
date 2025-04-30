import { PostOrPage, PostsOrPages } from "@tryghost/content-api";

export interface IGhostRepository {
  findBySlug(slug: string): Promise<PostOrPage | null>;
  findByTag(slug: string): Promise<PostOrPage[]>;
  findByAuthor(authorId: string): Promise<PostOrPage[]>;
  getFeatured(): Promise<PostOrPage[]>;
  browsePosts(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostsOrPages>;
  readPosts(slug?: string, id?: string): Promise<PostOrPage>;
}
