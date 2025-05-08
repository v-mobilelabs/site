import { ConsoleRepository } from "../repository/console.repository";
import { SiteInfoDTO } from "@/domain/dtos/site.dto";
import { SitemapDTO } from "@/domain/dtos/sitemap.dto";

export class ConsoleService {
  private readonly repository: ConsoleRepository;

  constructor() {
    this.repository = new ConsoleRepository();
  }

  async getSiteInfo(): Promise<SiteInfoDTO> {
    return this.repository.getSiteInfo();
  }

  async getSitemap(): Promise<SitemapDTO> {
    return this.repository.getSitemap();
  }
}
