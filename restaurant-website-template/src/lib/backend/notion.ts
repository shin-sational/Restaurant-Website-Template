import { Client, isFullPage } from "@notionhq/client";
import { NOTION_API_KEY } from "../../config/ENV";

export const notion = new Client({
  auth: NOTION_API_KEY,
});

/**
 * Notion のデータベースから全件取得する（titleが空白のものを除く）
 * @param databaseId
 * @returns
 */
export const fetchAllItems = async (databaseId: string) => {
  // ページネーションを使って全件取得する
  let hasMore = true;
  let startCursor: string | undefined = undefined;
  const allResults = [];

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: startCursor,
      filter: {
        property: "Name",
        title: {
          is_not_empty: true,
        },
      },
    });

    // 型ガードで Notion の Page オブジェクトだけを抽出
    const pages = response.results.filter(isFullPage);
    allResults.push(...pages);

    // ページネーション用の値を更新
    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }
  return allResults;
};
