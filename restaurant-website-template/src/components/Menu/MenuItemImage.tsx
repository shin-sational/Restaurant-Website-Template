"use client";
import React, { FC, useState } from "react";
import CustomImage from "@/components/common/atoms/CustomImage";
import { CustomButton } from "@/components/common/atoms/CustomButton";
import { MenuItem } from "@/type/notionFrontend.Type";

interface Props {
  menuItem: MenuItem;
}
const MenuItemImage: FC<Props> = ({ menuItem }) => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const allergyIcons = [
    { condition: menuItem.Spicy, src: "/allergy/Spicy.png", alt: "spicy" },
    {
      condition: menuItem.Gluten_Free,
      src: "/allergy/Gluten.png",
      alt: "gluten free",
    },
    { condition: menuItem.Vegan, src: "/allergy/Vegan.png", alt: "vegan" },
  ];
  return (
    <div>
      {isImageVisible && (
        // 画像
        <CustomImage
          src={menuItem.Photo}
          alt="menu photo"
          ratio="16/9"
          containerClassName="w-[343px] md:w-[410px]"
        />
      )}

      {/* アレルギー表示と写真ボタン */}
      <div className="flex items-center justify-between h-[20px] md:h-[24px]">
        <div className="flex items-center gap-2 h-full">
          {allergyIcons.map(
            (icon, index) =>
              icon.condition && (
                <CustomImage
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  ratio="1/1"
                  containerClassName="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                />
              )
          )}
        </div>
        <CustomButton
          variant="outline"
          className="p-0"
          onClick={() => setIsImageVisible(!isImageVisible)}
        >
          <CustomImage
            src="/others/camera.png"
            alt="photo"
            ratio="1/1"
            containerClassName="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default MenuItemImage;
