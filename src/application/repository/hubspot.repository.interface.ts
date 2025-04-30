import { LeadInputDTO } from "@/domain/dtos/lead.dto";

export interface IHubspotRepository {
  submit(lead: LeadInputDTO): Promise<string>;
}
