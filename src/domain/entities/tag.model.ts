export class Tag {
  id: string; // Unique identifier for the tag
  name: string; // Name of the tag
  slug: string; // URL-friendly identifier for the tag
  createdAt: Date; // Date when the tag was created
  updatedAt: Date; // Date when the tag was last updated

  constructor(id: string, props: Omit<Partial<Tag>, "id">) {
    this.id = id;
    this.name = props.name ?? "";
    this.slug = props.slug ?? "";
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  toDTO() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
    };
  }
}
