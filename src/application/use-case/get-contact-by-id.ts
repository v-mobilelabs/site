import { HubspotService } from "@/infrastructure/service/hubspot.service";

export class GetContactByIdUseCase {
  private readonly service: HubspotService;
    constructor() {
      this.service = new HubspotService();
    }

  async execute(id: string): Promise<any> {
    return this.service.getContactById(id);
  }
}