import {
  MAIN_BRANCH_INFO_DATABASE_ID,
  MENU_ITEMS_DATABASE_ID,
  SUB_BRANCHES_INFO_DATABASE_ID,
} from "@/config/ENV";
import { fetchAllItems } from "@/lib/backend/notion";
import { getNotionPropertyValue } from "@/lib/getNotionPropertyValue";
import {
  MainBranchProperties,
  MenuItemsProperties,
  NotionPage,
  SubBranchesProperties,
} from "@/type/notion.Type";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Description } from "@radix-ui/react-toast";
import { Main } from "next/document";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (typeof MENU_ITEMS_DATABASE_ID === "undefined") {
      console.log("No database id found");
      return;
    }

    const [allMenuItems, allMainBranches, allSubBranches] = await Promise.all([
      await fetchAllItems(MENU_ITEMS_DATABASE_ID!),
      await fetchAllItems(MAIN_BRANCH_INFO_DATABASE_ID!),
      await fetchAllItems(SUB_BRANCHES_INFO_DATABASE_ID!),
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

    const filteredMenuItems = menuItemsProperties.map((item) => {
      return {
        Name: getNotionPropertyValue(item.Name),
        Category: getNotionPropertyValue(item.Category),
        Price: Number(getNotionPropertyValue(item.Price)),
        Description: getNotionPropertyValue(item.Description),
        Photo: getNotionPropertyValue(item.Photo),
        Spicy: getNotionPropertyValue(item.Spicy),
        Gluten_Free: getNotionPropertyValue(item.Gluten_Free),
        Vegan: getNotionPropertyValue(item.Vegan),
      };
    });

    const mainBranchesProperties = getProperties(
      allMainBranches
    ) as unknown as MainBranchProperties[];
    const SubBranchesProperties = getProperties(
      allSubBranches
    ) as unknown as SubBranchesProperties[];

    return NextResponse.json({
      Menu_Items: filteredMenuItems,
      Main_Branch_Info: "",
      Sub_Branches_Info: "",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data from Notion" },
      { status: 500 }
    );
  }
}
