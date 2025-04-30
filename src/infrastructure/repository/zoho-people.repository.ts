import axios, { AxiosInstance } from "axios";

export class ZohoPeopleRepository {
  private readonly axiosClient: AxiosInstance;

  constructor() {
    if (
      !process.env.ZOHO_PEOPLE_API_ENDPOINT ||
      !process.env.ZOHO_PEOPLE_API_AUTH_TOKEN
    ) {
      throw new Error(
        "ZOHO_PEOPLE_API_ENDPOINT and ZOHO_PEOPLE_API_AUTH_TOKEN must be set"
      );
    }

    this.axiosClient = axios.create({
      baseURL: process.env.ZOHO_PEOPLE_API_ENDPOINT,
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_PEOPLE_API_AUTH_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async getEmployees(sIndex: number = 1, recLimit: number = 25): Promise<any> {
    try {
      const response = await this.axiosClient.get(
        "/forms/P_EmployeeView/records",
        {
          params: {
            sIndex,
            rec_limit: recLimit,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  }

  async getDepartments(): Promise<any> {
    try {
      const response = await this.axiosClient.get("/settings/departments");
      return response.data;
    } catch (error) {
      console.error("Error fetching departments:", error);
      throw error;
    }
  }
}
