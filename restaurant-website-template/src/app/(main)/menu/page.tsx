import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import MenuSubHeader from "@/components/common/MenuSubHeader";
import PageTitleImage from "@/components/common/PageTitleImage";
import MenuItemCard from "@/components/Menu/MenuCard";
import fetchPropertyData from "@/lib/fetchPropertyData";
import { groupMenuItemsByCategory } from "@/utils/groupMenuItem";
import React from "react";

const Menu = async () => {
  const restaurantData = await fetchPropertyData();

  const groupedMenuItems = groupMenuItemsByCategory(restaurantData);

  const handlePdfMenuClick = () => {
    console.log("PDF Menu Clicked");
  };
  return (
    <section>
      {/* ページタイトル */}
      <PageTitleImage
        backgroundImageSrc={restaurantData.Main_Branch_Info[0].Home_Menu_Photo1}
        type="menu"
        pdfLink={restaurantData.Main_Branch_Info[0].PDF_Menu}
      />

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
