import { IPostRepository } from "@/application/repository/post.repository.interface";
import { PostDTO } from "@/domain/dtos/post.dto";
import GhostContentAPI from "@tryghost/content-api";
import type { PostOrPage } from "@tryghost/content-api";

export class PostRepository implements IPostRepository {
  private readonly ghostApi: InstanceType<typeof GhostContentAPI>;

  constructor() {
    if (
      !process.env.GHOST_URL ||
      !process.env.GHOST_CONTENT_API_KEY ||
      !process.env.GHOST_API_VERSION
    ) {
      throw new Error("GHOST_URL and GHOST_CONTENT_API_KEY must be set");
    }

    this.ghostApi = new GhostContentAPI({
      url: process.env.GHOST_URL,
      key: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_API_VERSION,
    });
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string = "published_at",
    order: "asc" | "desc" = "desc",
    filter?: string
  ): Promise<PostDTO[]> {
    try {
      const response = await this.ghostApi.posts.browse({
        page,
        limit,
        include: ["authors", "tags"],
        filter: filter || undefined,
        order: `${sortBy} ${order}`,
      });

      const posts: PostDTO[] = response.map((post: PostOrPage) => ({
        id: post.id,
        title: post.title || "",
        slug: post.slug,
        content: post.html || "",
        excerpt: post.excerpt || "",
        featureImage: post.feature_image || "",
        publishedAt: post.published_at
          ? new Date(post.published_at)
          : undefined,
        updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
        createdAt: post.created_at ? new Date(post.created_at) : undefined,
        authorId: post.authors?.[0]?.slug || "",
        tags: post.tags?.map((tag: any) => tag.slug) || [],
        metaTitle: post.meta_title || "",
        metaDescription: post.meta_description || "",
      }));

      return posts;
    } catch (error) {
      return [];
    }
  }

  async findById(id: string): Promise<PostDTO | null> {
    try {
      const post: PostOrPage = await this.ghostApi.posts.read(
        { id },
        {
          include: ["authors", "tags"],
        }
      );

      return {
        id: post.id,
        title: post.title || "",
        slug: post.slug,
        content: post.html || "",
        excerpt: post.excerpt || "",
        featureImage: post.feature_image || "",
        publishedAt: post.published_at
          ? new Date(post.published_at)
          : undefined,
        updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
        createdAt: post.created_at ? new Date(post.created_at) : undefined,
        authorId: post.authors?.[0]?.slug || "",
        tags: post.tags?.map((tag: any) => tag.slug) || [],
        metaTitle: post.meta_title || "",
        metaDescription: post.meta_description || "",
      };
    } catch (error) {
      return null;
    }
  }

  async findBySlug(slug: string): Promise<PostDTO | null> {
    try {
      const post: PostOrPage = await this.ghostApi.posts.read(
        { slug },
        {
          include: ["authors", "tags"],
        }
      );

      return {
        id: post.id,
        title: post.title || "",
        slug: post.slug,
        content: post.html || "",
        excerpt: post.excerpt || "",
        featureImage: post.feature_image || "",
        publishedAt: post.published_at
          ? new Date(post.published_at)
          : undefined,
        updatedAt: post.updated_at ? new Date(post.updated_at) : undefined,
        createdAt: post.created_at ? new Date(post.created_at) : undefined,
        authorId: post.authors?.[0]?.slug || "",
        tags: post.tags?.map((tag: any) => tag.slug) || [],
        metaTitle: post.meta_title || "",
        metaDescription: post.meta_description || "",
      };
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
  ): Promise<PostDTO[]> {
    try {
      return await this.findAll(
        page,
        limit,
        sortBy,
        order,
        `author:${authorSlug}`
      );
    } catch (error) {
      return [];
    }
  }

  async findByTagSlug(
    page: number,
    limit: number,
    tagSlug: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<PostDTO[]> {
    try {
      return await this.findAll(page, limit, sortBy, order, `tag:${tagSlug}`);
    } catch (error) {
      return [];
    }
  }
}
