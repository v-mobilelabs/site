import { ContactInputDTO } from "@/domain/dtos/contact.dto";

export interface ICRMService {
  submit(lead: ContactInputDTO, token: string): Promise<string>;
}
