import { IPostService } from "@/application/service/post.service.interface";
import { PostRepository } from "../repository/post.repository";
import { IPostRepository } from "@/application/repository/post.repository.interface";
import { PostDTO } from "@/domain/dtos/post.dto";

export class PostService implements IPostService {
  private readonly repository: IPostRepository;

  constructor() {
    this.repository = new PostRepository();
  }

  async findById(id: string): Promise<PostDTO | null> {
    return this.repository.findById(id);
  }

  async findBySlug(slug: string): Promise<PostDTO | null> {
    return this.repository.findBySlug(slug);
  }

  async findAll(
    page: number,
    limit: number,
    sortBy: string,
    order: "asc" | "desc",
    filter?: string
  ): Promise<PostDTO[]> {
    return this.repository.findAll(page, limit, sortBy, order, filter);
  }

  async findByAuthorId(authorId: string): Promise<PostDTO[]> {
    return this.repository.findByAuthorId(authorId);
  }

  async findByTagId(tagId: string): Promise<PostDTO[]> {
    return this.repository.findByTagId(tagId);
  }
}
