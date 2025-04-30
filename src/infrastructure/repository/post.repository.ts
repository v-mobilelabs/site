import { IPostRepository } from "@/application/repository/post.repository.interface";
import { PaginatedPostsDTO, PostDTO } from "@/domain/dtos/post.dto";
import { Tag, Author, PostOrPage } from "@tryghost/content-api";
import { GhostRepository } from "./ghost.repository";

export class PostRepository implements IPostRepository {
  private readonly ghostRepository: GhostRepository;

  constructor() {
    this.ghostRepository = new GhostRepository();
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string = "published_at",
    order: "asc" | "desc" = "desc",
    filter?: string
  ): Promise<PaginatedPostsDTO> {
    try {
      const response = await this.ghostRepository.browsePosts(
        page,
        limit,
        sortBy,
        order,
        filter
      );

      const posts: PostDTO[] = response.map(this.formatPost);

      return {
        page: response.meta?.pagination?.page || 1,
        limit: response.meta?.pagination?.limit || 0,
        pages: response.meta?.pagination?.pages || 1,
        total: response.meta?.pagination?.total || 0,
        posts,
      };
    } catch (error) {
      return {
        page: 1,
        limit: 0,
        pages: 1,
        total: 0,
        posts: [],
      };
    }
  }

  async findById(id: string): Promise<PostDTO | null> {
    try {
      const response = await this.ghostRepository.readPosts(id);
      return this.formatPost(response);
    } catch (error) {
      return null;
    }
  }

  async findBySlug(slug: string): Promise<PostDTO | null> {
    try {
      const response = await this.ghostRepository.readPosts(slug);
      return this.formatPost(response);
    } catch (error) {
      return null;
    }
  }

  async findByAuthorSlug(
    page: number,
    limit: number,
    authorSlug: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return await this.findAll(
      page,
      limit,
      sortBy,
      order,
      `author:${authorSlug}`
    );
  }

  async findByTagSlug(
    page: number,
    limit: number,
    tagSlug: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return await this.findAll(page, limit, sortBy, order, `tag:${tagSlug}`);
  }

  async getFeaturedPosts(
    page: number,
    limit: number,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PaginatedPostsDTO> {
    return await this.findAll(page, limit, sortBy, order, "featured:true");
  }

  private formatPost = (post: PostOrPage): PostDTO => ({
    id: post.id,
    title: post.title || "",
    slug: post.slug,
    content: post.html || "",
    excerpt: post.excerpt || "",
    featureImage: post.feature_image || "",
    publishedAt: post.published_at ? new Date(post.published_at) : undefined,
    updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
    createdAt: post.created_at ? new Date(post.created_at) : undefined,
    authors: post.authors?.map((author: Author) => author.slug) || [],
    tags: post.tags?.map((tag: Tag) => tag.slug) || [],
    metaTitle: post.meta_title || "",
    metaDescription: post.meta_description || "",
  });
}
