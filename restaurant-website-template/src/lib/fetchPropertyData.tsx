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

    console.log(
      "next_public_base_url",
      NEXT_PUBLIC_BASE_URL,
      MENU_ITEMS_DATABASE_ID,
      MAIN_BRANCH_INFO_DATABASE_ID,
      SUB_BRANCHES_INFO_DATABASE_ID
    );

    if (!response.ok) {
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
