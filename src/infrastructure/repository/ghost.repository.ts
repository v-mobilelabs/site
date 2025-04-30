import { IGhostRepository } from "@/application/repository/ghost.repository.interface";
import GhostContentAPI, {
  GhostAPI,
  PostsOrPages,
  PostOrPage,
  Author,
  Authors,
} from "@tryghost/content-api";

export class GhostRepository implements IGhostRepository {
  private readonly client: GhostAPI;

  constructor() {
    if (
      !process.env.GHOST_URL ||
      !process.env.GHOST_CONTENT_API_KEY ||
      !process.env.GHOST_API_VERSION
    ) {
      throw new Error("GHOST_URL and GHOST_CONTENT_API_KEY must be set");
    }

    this.client = new GhostContentAPI({
      url: process.env.GHOST_URL,
      key: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_API_VERSION,
    });
  }

  async browsePosts(
    page: number,
    limit: number,
    sortBy: string = "published_at",
    order: "asc" | "desc" = "desc",
    filter?: string
  ): Promise<PostsOrPages> {
    try {
      const response = await this.client.posts.browse({
        page,
        limit,
        include: ["authors", "tags"],
        filter: filter || undefined,
        order: `${sortBy} ${order}`,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async readPosts(slug?: string, id?: string): Promise<PostOrPage> {
    try {
      if (!slug && !id) {
        throw new Error("Either slug or id must be provided");
      }
      const data = id
        ? { id: id as string | null }
        : { slug: slug as string | null };

      const response = await this.client.posts.read(data, {
        include: ["authors", "tags"],
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async browseTags(
    page: number,
    limit: number,
    sortBy: string = "slug",
    order: "asc" | "desc" = "asc"
  ): Promise<Authors> {
    try {
      const response = await this.client.authors.browse({
        page,
        limit,
        include: "count.posts",
        order: `${sortBy} ${order}`,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async readTags(slug?: string, id?: string): Promise<Author> {
    try {
      if (!slug && !id) {
        throw new Error("Either slug or id must be provided");
      }
      const data = id
        ? { id: id as string | null }
        : { slug: slug as string | null };

      const response = await this.client.authors.read(data, {
        include: "count.posts",
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async browseAuthors(
    page: number,
    limit: number,
    sortBy: string = "slug",
    order: "asc" | "desc" = "asc"
  ): Promise<Authors> {
    try {
      const response = await this.client.authors.browse({
        page,
        limit,
        include: "count.posts",
        order: `${sortBy} ${order}`,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async readAuthors(slug?: string, id?: string): Promise<Author> {
    try {
      if (!slug && !id) {
        throw new Error("Either slug or id must be provided");
      }
      const data = id
        ? { id: id as string | null }
        : { slug: slug as string | null };

      const response = await this.client.authors.read(data, {
        include: "count.posts",
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
