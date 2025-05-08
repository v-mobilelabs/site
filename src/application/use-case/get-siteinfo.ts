import { SiteInfoDTO } from "@/domain/dtos/site.dto";
import { ConsoleService } from "@/infrastructure/service/console.service";

export class GetSiteInfoUseCase {
  private readonly service: ConsoleService;
  constructor() {
    this.service = new ConsoleService();
  }
  async execute(): Promise<SiteInfoDTO> {
    const response = await this.service.getSiteInfo();
    return response;
  }
}
