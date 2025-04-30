import { ICRMService } from "@/application/service/crm.service";
import { HubspotRepository } from "../repository/hubspot.repository";
import { IHubspotRepository } from "@/application/repository/hubspot.repository.interface";
import { ContactInputDTO } from "@/domain/dtos/contact.dto";
import { SanitizedLead } from "@/domain/value-objects/lead-sanitize";

export class CRMService implements ICRMService {
  private readonly repository: IHubspotRepository;

  constructor() {
    this.repository = new HubspotRepository();
  }

  async submit(lead: ContactInputDTO, token: string): Promise<string> {
    const sanitized = SanitizedLead.create(lead, token);
    return this.repository.submit(sanitized);
  }
}
