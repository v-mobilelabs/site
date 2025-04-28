import { AuthorDTO } from "../dtos/author.dto";

export class Author {
  id: string; // Unique identifier for the author
  name: string; // Name of the author
  profileImage?: string; // URL to the author's profile image
  bio?: string; // Short biography of the author

  constructor(id: string, props: Omit<Partial<Author>, "id">) {
    this.id = id;
    this.name = props.name ?? "";
    this.profileImage = props.profileImage;
    this.bio = props.bio;
  }

  toDTO(): AuthorDTO {
    return {
      id: this.id,
      name: this.name,
      profileImage: this.profileImage,
      bio: this.bio,
    };
  }
}
