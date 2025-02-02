import React, { FC } from "react";
import CustomImage from "@/components/common/atoms/CustomImage";
import CustomPageTitle from "./atoms/CustomPageTitle";
import { CustomButton } from "./atoms/CustomButton";
import Link from "next/link";
import CustomExternalLink from "./atoms/CustomExternalLink";
import Image from "next/image";

interface Props {
  backgroundImageSrc: string;
  type: "menu" | "home" | "contact";
  restaurantName?: string;
  pdfLink?: string;
}

/**
 * PageTitleImageコンポーネントは、指定された背景画像とページタイトル、および関連するボタンを表示します。
 *
 * @param {string} backgroundImageSrc - 背景画像のソースURL。必須。
 * @param {"menu" | "home" | "contact"} type - 表示するページの種類。必須。
 * @param {string} [restaurantName] - typeが"home"の場合に表示するレストラン名。デフォルトは空文字。
 * @param {string} [pdfLink] - typeが"menu"の場合に表示するPDFへのリンク。リンクとして遷移。値を入れなければボタンは表示されない。
 *
 * @returns {JSX.Element} 背景画像とオーバーレイにページタイトルおよびボタンを表示する要素
 */
const PageTitleImage: FC<Props> = ({
  backgroundImageSrc,
  type,
  restaurantName,
  pdfLink,
}) => {
  const currentPageTitle = (type: Partial<Props["type"]>) => {
    switch (type) {
      case "menu":
        return "Menu";
      case "home":
        return restaurantName || "";
      case "contact":
        return "Contact Us";
      default:
        return "";
    }
  };
  const currentAlt = (type: Partial<Props["type"]>) => {
    switch (type) {
      case "menu":
        return "menu";
      case "home":
        return "home";
      case "contact":
        return "contact";
      default:
        return "";
    }
  };
  return (
    <div className="relative w-full h-[280px]">
      {/* 背景写真 */}
      {/* アスペクト比を使うコンポーネントだと、維持するための無駄な縦幅が確保されてしまうため、Imageを採用 */}
      <Image
        src={backgroundImageSrc}
        alt={currentAlt(type)}
        fill
        unoptimized={true}
        className="brightness-50 rounded-none object-cover"
      />

      {/* オーバーレイ部分 */}
      <div className="absolute inset-0 h-[280px]">
        <div className="flex flex-col items-center justify-center h-full gap-[20px]">
          <CustomPageTitle>{currentPageTitle(type)}</CustomPageTitle>

          {/* ボタン */}
          {type === "home" && (
            <CustomButton variant="default" asChild>
              <Link href="/menu">View the Menu</Link>
            </CustomButton>
          )}
          {type === "menu" && pdfLink && (
            <CustomButton variant="default" asChild>
              <CustomExternalLink href={pdfLink}>
                View PDF Menu
              </CustomExternalLink>
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTitleImage;
