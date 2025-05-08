import { SitemapDTO } from "@/domain/dtos/sitemap.dto";
import { ConsoleService } from "@/infrastructure/service/console.service";

export class GetSitemapUseCase {
  private readonly service: ConsoleService;
  constructor() {
    this.service = new ConsoleService();
  }
  async execute(): Promise<SitemapDTO> {
    const response = await this.service.getSitemap();
    return response;
  }
}
