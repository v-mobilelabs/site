import {
  Author,
  Authors,
  PostOrPage,
  PostsOrPages,
  Tag,
  Tags,
} from "@tryghost/content-api";

export interface IGhostRepository {
  browsePosts(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostsOrPages>;
  readPosts(slug?: string, id?: string): Promise<PostOrPage>;
  browseTags(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc"
  ): Promise<Tags>;
  readTag(slug?: string, id?: string): Promise<Tag>;
  browseAuthors(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc"
  ): Promise<Authors>;
  readAuthor(slug?: string, id?: string): Promise<Author>;
}
