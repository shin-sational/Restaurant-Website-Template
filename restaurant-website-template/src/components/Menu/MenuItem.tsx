import { RestaurantData } from "@/type/notionFrontend.Type";
import React, { FC } from "react";
import CustomImage from "@/components/common/atoms/CustomImage";
import { CustomButton } from "../common/atoms/CustomButton";

/**
 * TODO
 * - Cameraボタンを押した時に、写真が表示されるようにする（モーダルでも良いのかと思っている）
 * - SSRがなるべく残るように写真部分だけをCSRとしてコンポーネントに切り出すか検討する
 * - タグをSEOに強くなるように設定する
 * - レスポンシブ対応
 * - Cardだけコンポーネント化するか検討する
 */

interface Props {
  restaurantData: RestaurantData;
}
const MenuItem: FC<Props> = ({ restaurantData }) => {
  return (
    <article className="grid grid-cols-2">
      {restaurantData.Menu_Items.map((item, index) => {
        return (
          <div key={index} className="flex flex-col w-[410px] gap-[12px]">
            {/* メニュー名と金額 */}
            <div className="flex items-center justify-between font-bold">
              <h2 className="text-[24px]">{item.Name}</h2>
              <p className="text-[24px]">${item.Price.toFixed(2)}</p>
            </div>
            {/* 画像 */}
            <CustomImage
              src={item.Photo}
              alt="menu photo"
              ratio="16/9"
              containerClassName="w-[410px]"
            />
            {/* アレルギー表示と写真ボタン */}
            <div className="flex items-center justify-between h-[24px]">
              <div className="flex items-center gap-2 h-full">
                {item.Spicy && (
                  <CustomImage
                    src="/allergy/Spicy.png"
                    alt="spicy"
                    ratio="1/1"
                    containerClassName="w-[24px] h-[24px]"
                  />
                )}
                {item.Gluten_Free && (
                  <CustomImage
                    src="/allergy/Gluten.png"
                    alt="gluten free"
                    ratio="1/1"
                    containerClassName="w-[24px] h-[24px]"
                  />
                )}
                {item.Vegan && (
                  <CustomImage
                    src="/allergy/Vegan.png"
                    alt="vegan"
                    ratio="1/1"
                    containerClassName="w-[24px] h-[24px]"
                  />
                )}
              </div>
              <CustomButton variant="outline" className="p-0">
                <CustomImage
                  src="/others/camera.png"
                  alt="photo"
                  ratio="1/1"
                  containerClassName="w-[24px] h-[24px]"
                />
              </CustomButton>
            </div>
            {/* 説明 */}
            <p className="text-[20px] h-[30px]">{item.Description}</p>
          </div>
        );
      })}
    </article>
  );
};

export default MenuItem;
