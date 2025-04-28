import { PostDTO } from "@/domain/dtos/post.dto";
import { IPostService } from "../service/post.service.interface";
import { PostService } from "@/infrastructure/service/post.service";

export class FindPPostsByTagUseCase {
  private readonly service: IPostService;
  constructor() {
    this.service = new PostService();
  }
  async execute(
    tagId: string,
    page: number,
    limit: number
  ): Promise<PostDTO[]> {
    // Validate the input
    if (!tagId) {
      throw new Error("Tag ID is required");
    }
    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be greater than 0");
    }

    // Call the service to find posts by tag ID
    const posts = await this.service.findByTagId(tagId);
    return posts;
  }
}
