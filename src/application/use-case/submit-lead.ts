import { ContactInputDTO } from "@/domain/dtos/contact.dto";
import { ICRMService } from "../service/crm.service";
import { CRMService } from "@/infrastructure/service/crm.service";

export class SubmitLeadFormUseCase {
  private readonly service: ICRMService;
  constructor() {
    this.service = new CRMService();
  }
  async execute(contact: ContactInputDTO, token: string): Promise<string> {
    const message = await this.service.submit(contact, token);
    return message;
  }
}
