import { PostDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPostsByAuthorUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    authorSlug: string,
    page: number,
    limit: number
  ): Promise<PostDTO[]> {
    // Validate the input
    if (!authorSlug) {
      throw new Error("Author slug is required");
    }
    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be greater than 0");
    }

    // Call the service to find posts by author slug
    const posts = await this.service.findByAuthorSlug(page, limit, authorSlug);
    return posts;
  }
}
