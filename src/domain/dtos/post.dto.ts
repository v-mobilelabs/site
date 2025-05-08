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
  authors?: string[]; // Authors of the post
  tags?: string[]; // Tags associated with the post
  readTime?: number; // Estimated reading time in minutes
  metaTitle?: string; // Meta title for SEO
  metaDescription?: string; // Meta description for SEO
}

export interface PaginatedPostsDTO {
  page: number; // Current page number
  limit: number; // Number of posts per page
  pages: number; // Total number of pages
  total: number; // Total number of posts
  posts: PostDTO[]; // Array of posts for the current page
}
