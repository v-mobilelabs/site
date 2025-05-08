export interface SiteInfoDTO {
  config: {
    meta: {
      title: string;
      description: string;
      domain: string;
      siteName: string;
      caption: string;
    };
    links: {
      twitter: string;
      facebook: string;
      linkedIn: string;
    };
    agency: {
      foundingDate: string;
      legalName: string;
      numberOfEmployees: string;
    };
    contact: {
      email: string;
      telephone: string;
    };
    address: {
      street: string;
      locality: string;
      region: string;
      country: string;
      zip: string;
      telephone: string;
    };
  };
  faq: {
    title: string;
    description: string;
  }[];
}
