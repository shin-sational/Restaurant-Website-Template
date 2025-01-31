import { MenuItem } from "@/type/notionFrontend.Type";
import React, { FC } from "react";
import MenuItemImage from "./MenuItemImage";

/**
 * TODO
 * - ✅Cameraボタンを押した時に、写真が表示されるようにする（モーダルでも良いのかと思っている）
 * - ✅SSRがなるべく残るように写真部分だけをCSRとしてコンポーネントに切り出すか検討する
 * - タグをSEOに強くなるように設定する
 * - レスポンシブ対応
 * - Cardだけコンポーネント化するか検討する
 */

interface Props {
  menuItem: MenuItem;
}
const MenuItemCard: FC<Props> = ({ menuItem }) => {
  return (
    <article className="flex flex-col w-[343px] md:w-[410px] gap-[12px]">
      {/* メニュー名と金額 */}
      <div className="flex items-center justify-between text-[18px] md:text-[24px] font-bold">
        <h2>{menuItem.Name}</h2>
        <p>${menuItem.Price.toFixed(2)}</p>
      </div>

      {/* 画像とアレルギー表示　（クライアントサイドでレンダリングしたいため、別コンポーネントに切り分けた） */}
      <MenuItemImage menuItem={menuItem} />

      {/* 説明 */}
      <p className="text-[14px] md:text-[20px]">{menuItem.Description}</p>
    </article>
  );
};

export default MenuItemCard;
