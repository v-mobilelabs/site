import { HubspotService } from "@/infrastructure/service/hubspot.service";

export class GetContactByIdUseCase {
  private readonly service: HubspotService;
    constructor() {
      this.service = new HubspotService();
    }

  async execute(limit: number): Promise<any> {
    return this.service.getAllContacts(limit);
  }
}