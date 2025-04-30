import { PostOrPage, PostsOrPages } from "@tryghost/content-api";

export interface IGhostRepository {
  browsePosts(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostsOrPages>;
  readPosts(slug?: string, id?: string): Promise<PostOrPage>;
}
