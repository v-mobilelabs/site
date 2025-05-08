interface SitemapRoute {
  url: string;
  lastModified: string;
  changeFrequency: "yearly" | "monthly" | "weekly" | "daily";
  priority: number;
}

export interface SitemapDTO {
  tags: SitemapRoute[];
  authors: SitemapRoute[];
  articles: SitemapRoute[];
}
