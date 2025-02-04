import {
  MAIN_BRANCH_INFO_DATABASE_ID,
  MENU_ITEMS_DATABASE_ID,
  SUB_BRANCHES_INFO_DATABASE_ID,
} from "@/config/ENV";
import { ERROR_MESSAGES } from "@/config/errorMessage";
import { fetchAllItems } from "@/lib/backend/notion";
import { getNotionPropertyValue } from "@/lib/getNotionPropertyValue";
import {
  MainBranchProperties,
  MenuItemsProperties,
  SubBranchesProperties,
} from "@/type/notion.Type";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextRequest, NextResponse } from "next/server";

/**
 * Notionのデータベースを変更した際のメンテナンス方法
 * 1. Notion.type.tsをアップデートする
 * 2. GETメソッド内のreturn値のNotionのオブジェクト名をアップデートする
 *
 * 例) Drinkという項目を足した場合
 * Notion.type.ts内にDrinkを追加する
 * GETメソッド内のreturn値にDrinkを追加する
 */

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (
      !MENU_ITEMS_DATABASE_ID ||
      !MAIN_BRANCH_INFO_DATABASE_ID ||
      !SUB_BRANCHES_INFO_DATABASE_ID
    ) {
      console.log("Database ID is missing:", {
        MAIN_BRANCH_INFO_DATABASE_ID,
        MENU_ITEMS_DATABASE_ID,
        SUB_BRANCHES_INFO_DATABASE_ID,
      });
      return NextResponse.json(
        {
          error: {
            MENU_ITEMS_DATABASE_ID,
            MAIN_BRANCH_INFO_DATABASE_ID,
            SUB_BRANCHES_INFO_DATABASE_ID,
          },
        },
        { status: 500 }
      );
    }

    const [allMenuItems, allMainBranches, allSubBranches] = await Promise.all([
      await fetchAllItems(MENU_ITEMS_DATABASE_ID),
      await fetchAllItems(MAIN_BRANCH_INFO_DATABASE_ID),
      await fetchAllItems(SUB_BRANCHES_INFO_DATABASE_ID),
    ]);

    /**
     * ジェネリクスを使ってページ配列から properties 部分のみを抽出するヘルパー関数
     *
     * @param pages - NotionPage 配列（プロパティの型は T として指定）
     * @returns T 型の配列
     */
    const getProperties = (pages: PageObjectResponse[]) =>
      pages.map((page) => page.properties);

    // 一度unknown型に変換してから、型アサーションを行う
    const menuItemsProperties = getProperties(
      allMenuItems
    ) as unknown as MenuItemsProperties[];

    const mainBranchesProperties = getProperties(
      allMainBranches
    ) as unknown as MainBranchProperties[];
    const SubBranchesProperties = getProperties(
      allSubBranches
    ) as unknown as SubBranchesProperties[];

    const parseMenuItems = menuItemsProperties.map((item) => {
      return {
        Name:
          getNotionPropertyValue(item.Name) ??
          ERROR_MESSAGES.en.MESSAGES.ASK_FOR_DETAILS,
        Category: getNotionPropertyValue(item.Category),
        Price: Number(getNotionPropertyValue(item.Price)),
        Description: getNotionPropertyValue(item.Description),
        Photo: getNotionPropertyValue(item.Photo),
        Spicy: getNotionPropertyValue(item.Spicy) ?? false,
        Gluten_Free: getNotionPropertyValue(item.Gluten_Free) ?? false,
        Vegan: getNotionPropertyValue(item.Vegan) ?? false,
      };
    });

    const parseMainBranchInfo = mainBranchesProperties.map((item) => {
      return {
        Name:
          getNotionPropertyValue(item.Name) ??
          ERROR_MESSAGES.en.MESSAGES.ASK_FOR_DETAILS,
        Home_Menu_Description: getNotionPropertyValue(
          item.Home_Menu_Description
        ),
        Logo: getNotionPropertyValue(item.Logo),
        Restaurant_Photo: getNotionPropertyValue(item.Restaurant_Photo),
        Instagram: getNotionPropertyValue(item.Instagram),
        Facebook: getNotionPropertyValue(item.FaceBook),
        Address: getNotionPropertyValue(item.Address),
        Monday_Opening_Time: Number(
          getNotionPropertyValue(item.Monday_Opening_Time)
        ),
        Monday_Opening_AM_PM: getNotionPropertyValue(item.Monday_Opening_AM_PM),
        Monday_Closed_Time: Number(
          getNotionPropertyValue(item.Monday_Closed_Time)
        ),
        Monday_closed_AM_PM: getNotionPropertyValue(item.Monday_Closed_AM_PM),
        Tuesday_Opening_Time: Number(
          getNotionPropertyValue(item.Tuesday_Opening_Time)
        ),
        Tuesday_Opening_AM_PM: getNotionPropertyValue(
          item.Tuesday_Opening_AM_PM
        ),
        Tuesday_Closed_Time: Number(
          getNotionPropertyValue(item.Tuesday_Closed_Time)
        ),
        Tuesday_Closed_AM_PM: getNotionPropertyValue(item.Tuesday_Closed_AM_PM),
        Wednesday_Opening_Time: Number(
          getNotionPropertyValue(item.Wednesday_Opening_Time)
        ),
        Wednesday_Opening_AM_PM: getNotionPropertyValue(
          item.Wednesday_Opening_AM_PM
        ),
        Wednesday_Closed_Time: Number(
          getNotionPropertyValue(item.Wednesday_Closed_Time)
        ),
        Wednesday_Closed_AM_PM: getNotionPropertyValue(
          item.Wednesday_Closed_AM_PM
        ),
        Thursday_Opening_Time: Number(
          getNotionPropertyValue(item.Thursday_Opening_Time)
        ),
        Thursday_Opening_AM_PM: getNotionPropertyValue(
          item.Thursday_Opening_AM_PM
        ),
        Thursday_Closed_Time: Number(
          getNotionPropertyValue(item.Thursday_Closed_Time)
        ),
        Thursday_Closed_AM_PM: getNotionPropertyValue(
          item.Thursday_Closed_AM_PM
        ),
        Friday_Opening_Time: getNotionPropertyValue(item.Friday_Opening_Time),
        Friday_Opening_AM_PM: getNotionPropertyValue(item.Friday_Opening_AM_PM),
        Friday_Closed_Time: Number(
          getNotionPropertyValue(item.Friday_Closed_Time)
        ),
        Friday_Closed_AM_PM: getNotionPropertyValue(item.Friday_Closed_AM_PM),
        Saturday_Opening_Time: Number(
          getNotionPropertyValue(item.Saturday_Opening_Time)
        ),
        Saturday_Opening_AM_PM: getNotionPropertyValue(
          item.Saturday_Opening_AM_PM
        ),
        Saturday_Closed_Time: Number(
          getNotionPropertyValue(item.Saturday_Closed_Time)
        ),
        Saturday_Closed_AM_PM: getNotionPropertyValue(
          item.Saturday_Closed_AM_PM
        ),
        Sunday_Opening_Time: Number(
          getNotionPropertyValue(item.Sunday_Opening_Time)
        ),
        Sunday_Opening_AM_PM: getNotionPropertyValue(item.Sunday_Opening_AM_PM),
        Sunday_Closed_Time: Number(
          getNotionPropertyValue(item.Sunday_Closed_Time)
        ),
        Sunday_Closed_AM_PM: getNotionPropertyValue(item.Sunday_Closed_AM_PM),
        Phone: getNotionPropertyValue(item.Phone),
        Email: getNotionPropertyValue(item.Email),
        PDF_Menu: getNotionPropertyValue(item.PDF_Menu),
        Home_Menu_Photo1: getNotionPropertyValue(item.Home_Menu_Photo1),
        Home_Menu_Photo2: getNotionPropertyValue(item.Home_Menu_Photo2),
        Home_Menu_Photo3: getNotionPropertyValue(item.Home_Menu_Photo3),
      };
    });

    const parseSubBranchesInfo = SubBranchesProperties.map((item) => {
      return {
        Name:
          getNotionPropertyValue(item.Name) ??
          ERROR_MESSAGES.en.MESSAGES.ASK_FOR_DETAILS,
        Restaurant_Photo: getNotionPropertyValue(item.Restaurant_Photo),
        Address: getNotionPropertyValue(item.Address),
        Monday_Opening_Time: Number(
          getNotionPropertyValue(item.Monday_Opening_Time)
        ),
        Monday_Opening_AM_PM: getNotionPropertyValue(item.Monday_Opening_AM_PM),
        Monday_Closed_Time: Number(
          getNotionPropertyValue(item.Monday_Closed_Time)
        ),
        Monday_closed_AM_PM: getNotionPropertyValue(item.Monday_Closed_AM_PM),
        Tuesday_Opening_Time: Number(
          getNotionPropertyValue(item.Tuesday_Opening_Time)
        ),
        Tuesday_Opening_AM_PM: getNotionPropertyValue(
          item.Tuesday_Opening_AM_PM
        ),
        Tuesday_Closed_Time: Number(
          getNotionPropertyValue(item.Tuesday_Closed_Time)
        ),
        Tuesday_Closed_AM_PM: getNotionPropertyValue(item.Tuesday_Closed_AM_PM),
        Wednesday_Opening_Time: Number(
          getNotionPropertyValue(item.Wednesday_Opening_Time)
        ),
        Wednesday_Opening_AM_PM: getNotionPropertyValue(
          item.Wednesday_Opening_AM_PM
        ),
        Wednesday_Closed_Time: Number(
          getNotionPropertyValue(item.Wednesday_Closed_Time)
        ),
        Wednesday_Closed_AM_PM: getNotionPropertyValue(
          item.Wednesday_Closed_AM_PM
        ),
        Thursday_Opening_Time: Number(
          getNotionPropertyValue(item.Thursday_Opening_Time)
        ),
        Thursday_Opening_AM_PM: getNotionPropertyValue(
          item.Thursday_Opening_AM_PM
        ),
        Thursday_Closed_Time: Number(
          getNotionPropertyValue(item.Thursday_Closed_Time)
        ),
        Thursday_Closed_AM_PM: getNotionPropertyValue(
          item.Thursday_Closed_AM_PM
        ),
        Friday_Opening_Time: getNotionPropertyValue(item.Friday_Opening_Time),
        Friday_Opening_AM_PM: getNotionPropertyValue(item.Friday_Opening_AM_PM),
        Friday_Closed_Time: Number(
          getNotionPropertyValue(item.Friday_Closed_Time)
        ),
        Friday_Closed_AM_PM: getNotionPropertyValue(item.Friday_Closed_AM_PM),
        Saturday_Opening_Time: Number(
          getNotionPropertyValue(item.Saturday_Opening_Time)
        ),
        Saturday_Opening_AM_PM: getNotionPropertyValue(
          item.Saturday_Opening_AM_PM
        ),
        Saturday_Closed_Time: Number(
          getNotionPropertyValue(item.Saturday_Closed_Time)
        ),
        Saturday_Closed_AM_PM: getNotionPropertyValue(
          item.Saturday_Closed_AM_PM
        ),
        Sunday_Opening_Time: Number(
          getNotionPropertyValue(item.Sunday_Opening_Time)
        ),
        Sunday_Opening_AM_PM: getNotionPropertyValue(item.Sunday_Opening_AM_PM),
        Sunday_Closed_Time: Number(
          getNotionPropertyValue(item.Sunday_Closed_Time)
        ),
        Sunday_Closed_AM_PM: getNotionPropertyValue(item.Sunday_Closed_AM_PM),
        Phone: getNotionPropertyValue(item.Phone),
        Email: getNotionPropertyValue(item.Email),
      };
    });

    return NextResponse.json({
      Menu_Items: parseMenuItems,
      Main_Branch_Info: parseMainBranchInfo,
      Sub_Branches_Info: parseSubBranchesInfo,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data from Notion" },
      { status: 500 }
    );
  }
}
