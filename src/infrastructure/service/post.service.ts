import { IPostService } from "@/application/service/post.service.interface";
import { PostRepository } from "../repository/post.repository";
import { PaginatedPostsDTO, PostDTO } from "@/domain/dtos/post.dto";

export class PostService implements IPostService {
  private readonly repository: PostRepository;

  constructor() {
    this.repository = new PostRepository();
  }

  async findById(id: string): Promise<PostDTO | null> {
    return this.repository.findById(id);
  }

  async findBySlug(slug: string): Promise<PostDTO | null> {
    return this.repository.findBySlug(slug);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy?: string,
    order?: "asc" | "desc",
    filter?: string
  ): Promise<PaginatedPostsDTO> {
    return this.repository.findAll(page, limit, sortBy, order, filter);
  }

  async findByAuthorSlug(
    page: number,
    limit: number,
    authorSlug: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return this.repository.findByAuthorSlug(
      page,
      limit,
      authorSlug,
      sortBy,
      order
    );
  }

  async findByTagSlug(
    page: number,
    limit: number,
    tagSlug: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return this.repository.findByTagSlug(page, limit, tagSlug, sortBy, order);
  }

  async getFeaturedPosts(
    page: number,
    limit: number,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return this.repository.getFeaturedPosts(page, limit, sortBy, order);
  }
}
