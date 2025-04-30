import { ContactFormData } from "../repository/hubspot.repository.interface";
import { HubspotService } from "@/infrastructure/service/hubspot.service";

export class SubmitLeadFormUseCase {
  private readonly service: HubspotService;
  constructor() {
    this.service = new HubspotService();
  }
  async execute(contactData: ContactFormData, token: string): Promise<string> {
    const message = await this.service.submitLeadForm(contactData, token);
    return message;
  }
}
