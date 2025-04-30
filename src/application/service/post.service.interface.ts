import { PostDTO, PaginatedPostsDTO } from "@/domain/dtos/post.dto";

export interface IPostService {
  findById(id: string): Promise<PostDTO | null>; // Find a post by its ID
  findBySlug(slug: string): Promise<PostDTO | null>; // Find a post by its slug
  findAll(
    page: number,
    limit: number,
    sortBy?: string,
    order?: "asc" | "desc",
    filter?: string
  ): Promise<PaginatedPostsDTO>; // Get all posts
  findByAuthorSlug(
    page: number,
    limit: number,
    authorSlug: string,
    sortBy?: string,
    order?: "asc" | "desc",
  ): Promise<PaginatedPostsDTO>; // Find posts by author slug
  findByTagSlug(
    page: number,
    limit: number,
    tagSlug: string,
    sortBy?: string,
    order?: "asc" | "desc",
  ): Promise<PaginatedPostsDTO>; // Find posts by tag slug
}
