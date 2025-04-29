import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";

export class GhostService {
  private readonly client: GhostAPI;
  constructor() {
    if (!process.env.GHOST_URL || !process.env.GHOST_CONTENT_API_KEY) {
      throw new Error("GHOST_URL and GHOST_CONTENT_API_KEY must be set");
    }
    this.client = new GhostContentAPI({
      url: process.env.GHOST_URL,
      key: process.env.GHOST_CONTENT_API_KEY,
      version: "v5.0",
    });
  }
}
