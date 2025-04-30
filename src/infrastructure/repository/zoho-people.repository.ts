import axios, { AxiosInstance } from "axios";
import { IZohoPeopleRepository } from "@/application/repository/zoho-people.repository.interface";

export class ZohoPeopleRepository implements IZohoPeopleRepository {
  private readonly client: AxiosInstance;

  constructor() {
    if (
      !process.env.ZOHO_PEOPLE_API_ENDPOINT ||
      !process.env.ZOHO_PEOPLE_API_AUTH_TOKEN
    ) {
      throw new Error(
        "ZOHO_PEOPLE_API_ENDPOINT and ZOHO_PEOPLE_API_AUTH_TOKEN must be set"
      );
    }

    this.client = axios.create({
      baseURL: process.env.ZOHO_PEOPLE_API_ENDPOINT,
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_PEOPLE_API_AUTH_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async getEmployees(sIndex: number = 1, recLimit: number = 25): Promise<any> {
    try {
      const response = await this.client.get("/forms/P_EmployeeView/records", {
        params: {
          sIndex,
          rec_limit: recLimit,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  }

  async getDepartments(): Promise<any> {
    try {
      const response = await this.client.get("/settings/departments");
      return response.data;
    } catch (error) {
      console.error("Error fetching departments:", error);
      throw error;
    }
  }
}
