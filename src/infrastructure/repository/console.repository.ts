import { IConsoleRepository } from "@/application/repository/console.repository.interface";
import { SiteInfoDTO } from "@/domain/dtos/site.dto";
import { SitemapDTO } from "@/domain/dtos/sitemap.dto";
import axios, { AxiosInstance } from "axios";

export class ConsoleRepository implements IConsoleRepository {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://console.cosmoops.com/api",
    });
  }

  async getSiteInfo(): Promise<SiteInfoDTO> {
    try {
      const response = await this.client.get("/site");
      return response.data;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  }

  async getSitemap(): Promise<SitemapDTO> {
    try {
      const response = await this.client.get("/sitemap");
      return response.data;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  }
}
