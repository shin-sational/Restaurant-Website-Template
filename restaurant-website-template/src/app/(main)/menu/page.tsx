import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import MenuItemCard from "@/components/Menu/MenuCard";
import fetchPropertyData from "@/lib/fetchPropertyData";
import { MenuItem } from "@/type/notionFrontend.Type";
import React from "react";

const Menu = async () => {
  const restaurantData = await fetchPropertyData();

  /**
   * カテゴリーごとにメニューをグループ化
   * Appetizer:[MenuItem, MenuItem, ...],
   * Main:[MenuItem, MenuItem, ...],
   */
  const groupedMenuItems: { [key: string]: MenuItem[] } = {};
  restaurantData.Menu_Items.forEach((menuItem) => {
    if (!groupedMenuItems[menuItem.Category]) {
      groupedMenuItems[menuItem.Category] = [];
    }
    groupedMenuItems[menuItem.Category].push(menuItem);
  });

  return (
    <section>
      {Object.entries(groupedMenuItems).map(([category, menuItems]) => (
        <div
          key={category}
          className="flex flex-col items-center justify-center px-[16px] py-[32px] lg:px-[160px] lg:py-[80px] gap-[40px] lg:gap-[64px]"
        >
          <CustomSectionTitle>{category}</CustomSectionTitle>
          <div className="grid lg:grid-cols-2 gap-[40px] lg:gap-[200px]">
            {menuItems.map((menuItem) => (
              <MenuItemCard menuItem={menuItem} key={menuItem.Name} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
