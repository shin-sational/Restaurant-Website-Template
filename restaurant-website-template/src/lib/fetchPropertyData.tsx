import {
  MAIN_BRANCH_INFO_DATABASE_ID,
  MENU_ITEMS_DATABASE_ID,
  NEXT_PUBLIC_BASE_URL,
  SUB_BRANCHES_INFO_DATABASE_ID,
} from "@/config/ENV";
import { ERROR_MESSAGES } from "@/config/errorMessage";
import { RestaurantData } from "@/type/notionFrontend.Type";

async function fetchPropertyData(): Promise<RestaurantData> {
  try {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/restaurant`, {
      next: { revalidate: 3600 }, // 1時間キャッシュ
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (
        !MENU_ITEMS_DATABASE_ID ||
        !MAIN_BRANCH_INFO_DATABASE_ID ||
        !SUB_BRANCHES_INFO_DATABASE_ID
      ) {
        console.log("⭐️Database ID is missing:", {
          MAIN_BRANCH_INFO_DATABASE_ID,
          MENU_ITEMS_DATABASE_ID,
          SUB_BRANCHES_INFO_DATABASE_ID,
        });
      }
      const errorMessage = await response.text(); // 追加: サーバーからのレスポンス内容を取得
      console.error(
        "Fetch failed:",
        response.status,
        response.statusText,
        errorMessage
      );
      throw new Error(
        ERROR_MESSAGES.en.FRONTEND.UI.LOADING_FAILED("restaurant data")
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(
      ERROR_MESSAGES.en.FRONTEND.UI.LOADING_FAILED("restaurant data")
    );
  }
}

export default fetchPropertyData;
