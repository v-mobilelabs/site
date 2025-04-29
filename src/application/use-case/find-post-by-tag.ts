import { PostDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPostsByTagUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    tagSlug: string,
    page: number,
    limit: number
  ): Promise<PostDTO[]> {
    // Validate the input
    if (!tagSlug) {
      throw new Error("Tag slug is required");
    }
    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be greater than 0");
    }

    // Call the service to find posts by tag slug
    const posts = await this.service.findByTagSlug(page, limit, tagSlug);
    return posts;
  }
}
