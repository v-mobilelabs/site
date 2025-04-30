import { HubspotRepository } from "../repository/hubspot.repository";
import {
  ContactFormData,
  Lead,
} from "@/application/repository/hubspot.repository.interface";

export class HubspotService {
  private readonly repository: HubspotRepository;

  constructor() {
    this.repository = new HubspotRepository();
  }

  async getAllContacts(limit: number): Promise<any> {
    return this.repository.getAllContacts(limit);
  }

  async getContactById(id: string): Promise<any> {
    return this.repository.getContactById(id);
  }

  async submitLeadForm(
    contactData: ContactFormData,
    token: string
  ): Promise<string> {
    const lead = this.sanitizeLeadSubmission(contactData, token);
    return this.repository.submitLeadForm(lead);
  }

  private sanitizeLeadSubmission(contact: ContactFormData, token: string) {
    const lead: Lead = {
      context: {
        hutk: token,
        pageName: "Contact",
        pageUri: "https://cosmoops.com/contact",
      },
      fields: [
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: contact.firstName,
        },
        {
          objectTypeId: "0-1",
          name: "lastname",
          value: contact.lastName,
        },
        {
          objectTypeId: "0-1",
          name: "email",
          value: contact.email,
        },
      ],
      legalConsentOptions: {
        consent: {
          communications: [
            {
              value: contact.communication ?? false,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from cosmoops.com",
            },
          ],
          consentToProcess: contact.terms,
          text: "I agree to receive other communications from cosmoops.com",
        },
      },
    };
    if (contact.phone) {
      lead.fields.push({
        objectTypeId: "0-1",
        name: "phone",
        value: contact.phone,
      });
    }
    return lead;
  }
}
