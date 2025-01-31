import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import MenuSubHeader from "@/components/common/MenuSubHeader";
import MenuItemCard from "@/components/Menu/MenuCard";
import fetchPropertyData from "@/lib/fetchPropertyData";
import { groupMenuItemsByCategory } from "@/utils/groupMenuItem";
import React from "react";

const Menu = async () => {
  const restaurantData = await fetchPropertyData();

  const groupedMenuItems = groupMenuItemsByCategory(restaurantData);

  return (
    <section>
      {/* カテゴリに遷移するためのサブヘッダー */}
      <MenuSubHeader groupedMenuItems={groupedMenuItems} />

      {/* カテゴリごとのメニューカード */}
      {Object.entries(groupedMenuItems).map(([category, menuItems]) => (
        <div
          key={category}
          className="flex flex-col items-center justify-center px-[16px] py-[32px] lg:px-[160px] lg:py-[80px] gap-[40px] lg:gap-[64px]"
          id={category}
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
