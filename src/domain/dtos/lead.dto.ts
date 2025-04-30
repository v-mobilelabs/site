export interface LeadInputDTO {
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
