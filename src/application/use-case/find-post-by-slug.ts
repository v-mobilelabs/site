import { PostDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPostBySlugUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    slug: string,
  ): Promise<PostDTO| null> {
    // Validate the input
    if (!slug) {
      throw new Error("Post slug is required");
    }

    // Call the service to find post by slug
    const post = await this.service.findBySlug(slug);
    return post;
  }
}
