import { PostDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindAllPostsUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    page: number,
    limit: number
  ): Promise<PostDTO[]> {
    // Validate the input
    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be greater than 0");
    }

    // Call the service to find posts
    const posts = await this.service.findAll(page, limit);
    return posts;
  }
}
