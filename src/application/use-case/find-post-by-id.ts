import { PostDTO } from "@/domain/dtos/post.dto";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPostBySlugUseCase {
  private readonly service: PostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    id: string,
  ): Promise<PostDTO| null> {
    // Validate the input
    if (!id) {
      throw new Error("Post ID is required");
    }

    // Call the service to find post by ID
    const post = await this.service.findById(id);
    return post;
  }
}
