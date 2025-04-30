export interface IHubspotRepository {
  getAllContacts(limit: number): Promise<any>,
  getContactById(id: string): Promise<any>;
  submitLeadForm(lead: Lead): Promise<string>;
}

export interface Lead {
  submittedAt?: string;
  fields: {
    objectTypeId: string;
    name: string;
    value: string;
  }[];
  context: {
    hutk: string;
    pageUri: string;
    pageName: string;
  };
  legalConsentOptions: {
    consent: {
      consentToProcess: boolean;
      text: string;
      communications: {
        value: boolean;
        subscriptionTypeId: number;
        text: string;
      }[];
    };
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  phone?: string;
  communication?: boolean;
}
