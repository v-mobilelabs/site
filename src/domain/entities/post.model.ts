import { PostDTO } from "../dtos/post.dto";

export class Post {
  id: string; // Unique identifier for the post
  title: string; // Title of the post
  content: string; // Content of the post
  authors: string[]; // Array of author IDs who wrote the post
  tags: string[]; // Array of tag IDs associated with the post
  createdAt: Date; // Date when the post was created
  updatedAt: Date; // Date when the post was last updated
  slug: string; // URL-friendly identifier for the post
  publishedAt?: Date; // Date when the post was published

  constructor(id: string, props: Omit<Partial<Post>, "id">) {
    this.id = id;
    this.title = props.title ?? "";
    this.content = props.content ?? "";
    this.authors = props.authors ?? [];
    this.tags = props.tags ?? [];
    this.slug = props.slug ?? "";
    this.publishedAt = props.publishedAt;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  toDTO(): PostDTO {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      authors: this.authors,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      slug: this.slug,
      publishedAt: this.publishedAt,
    };
  }
}
