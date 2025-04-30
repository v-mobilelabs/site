import {
  IHubspotRepository,
  Lead,
} from "@/application/repository/hubspot.repository.interface";
import { Client } from "@hubspot/api-client";
import axios, { AxiosInstance } from "axios";

export class HubspotRepository implements IHubspotRepository {
  private readonly client: Client;
  private readonly formSubmissionClient: AxiosInstance;
  private readonly leadFormId: string;

  constructor() {
    if (
      !process.env.HUBSPOT_API_KEY ||
      !process.env.LEAD_PORTAL_ID ||
      !process.env.LEAD_FORM_ID
    ) {
      throw new Error(
        "HUBSPOT_API_KEY and LEAD_PORTAL_ID and LEAD_FORM_ID must be set"
      );
    }
    this.leadFormId = process.env.LEAD_FORM_ID;
    this.client = new Client({
      apiKey: process.env.HUBSPOT_API_KEY,
    });
    this.formSubmissionClient = axios.create({
      baseURL: `https://api.hsforms.com/submissions/v3/integration/secure/submit/${process.env.LEAD_PORTAL_ID}`,
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async getAllContacts(limit: number): Promise<any> {
    try {
      const response = await this.client.crm.contacts.basicApi.getPage(limit);
      return response.results;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  }

  async getContactById(id: string): Promise<any> {
    try {
      const response = await this.client.crm.contacts.basicApi.getById(id);
      return response;
    } catch (error) {
      console.error("Error fetching contact by ID:", error);
      throw error;
    }
  }

  async submitLeadForm(lead: Lead): Promise<string> {
    try {
      const response = await this.formSubmissionClient.post(
        `/${this.leadFormId}`,
        JSON.stringify(lead)
      );
      return response.data?.message;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  }
}
