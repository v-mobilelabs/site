export interface PostDTO {
  id: string; // Unique identifier for the post
  title: string; // Title of the post
  slug: string; // URL-friendly identifier
  content: string; // Full HTML content of the post
  excerpt?: string; // Short summary of the post
  featureImage?: string; // URL to the featured image
  publishedAt?: Date; // Date and time when the post was published
  updatedAt?: Date; // Date and time when the post was last updated
  createdAt?: Date;
  authorId: string; // Author of the post
  tags?: string[]; // Tags associated with the post
  metaTitle?: string; // Meta title for SEO
  metaDescription?: string; // Meta description for SEO
}
