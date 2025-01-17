import { Client } from "@notionhq/client";
import { NOTION_API_KEY } from "../../config/ENV";

export const notion = new Client({
  auth: NOTION_API_KEY,
});
