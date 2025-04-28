import { PostDTO } from "@/domain/dtos/post.dto";

export interface IPostService {
  findById(id: string): Promise<PostDTO | null>; // Find a post by its ID
  findBySlug(slug: string): Promise<PostDTO | null>; // Find a post by its slug
  findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostDTO[]>; // Get all posts
  findByAuthorId(authorId: string): Promise<PostDTO[]>; // Find posts by author ID
  findByTagId(tagId: string): Promise<PostDTO[]>; // Find posts by tag ID
}
