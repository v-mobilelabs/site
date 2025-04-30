import { ContactInputDTO } from "../dtos/contact.dto";
import { LeadInputDTO } from "../dtos/lead.dto";

export class SanitizedLead {
  private constructor() {}

  static create(contact: ContactInputDTO, token: string): LeadInputDTO {
    const lead: LeadInputDTO = {
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
