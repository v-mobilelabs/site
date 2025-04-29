import { PostDTO } from "@/domain/dtos/post.dto";

export interface IPostRepository {
  findById(id: string): Promise<PostDTO | null>; // Find a post by its ID
  findBySlug(slug: string): Promise<PostDTO | null>; // Find a post by its slug
  findAll(
    page: number,
    limit: number,
    sortBy?: string,
    order?: "asc" | "desc",
    filter?: string
  ): Promise<PostDTO[]>; // Get all posts
  findByAuthorSlug(
    page: number,
    limit: number,
    authorId: string,
    sortBy?: string,
    order?: "asc" | "desc",
  ): Promise<PostDTO[]>; // Find posts by author slug
  findByTagSlug(
    page: number,
    limit: number,
    tagId: string,
    sortBy?: string,
    order?: "asc" | "desc",
  ): Promise<PostDTO[]>; // Find posts by tag slug
}
