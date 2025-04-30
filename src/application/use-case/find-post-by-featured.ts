import { PaginatedPostsDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPostsByTagUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(page: number, limit: number): Promise<PaginatedPostsDTO> {
    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be greater than 0");
    }

    // Call the service to find featured posts
    const posts = await this.service.getFeaturedPosts(page, limit);
    return posts;
  }
}
