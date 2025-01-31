"use client";
import { RestaurantData } from "@/type/notionFrontend.Type";
import React, { FC } from "react";
import CustomImage from "../common/atoms/CustomImage";
import { navigationLinks } from "@/config/frontend/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CustomExternalLink from "../common/atoms/CustomExternalLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/**
 * TODO
 * - Hoursを追加する
 * - Headerとクラスを統一できる場合は、utilityクラスを作って適用する
 * - レスポンシブ対応(モバイルのみ作成)
 * - logoがない時のハンドリング対応
 */

interface Props {
  restaurantData: RestaurantData;
}
const Footer: FC<Props> = ({ restaurantData }) => {
  const pathname = usePathname();
  const instagramLink = restaurantData.Main_Branch_Info[0].Instagram || null;
  const facebookLink = restaurantData.Main_Branch_Info[0].Facebook || null;
  return (
    <footer className="w-full bg-secondaryBackground px-[20px] py-[40px]">
      <div className="w-full flex flex-col items-center gap-[38px]">
        {/* LOGO */}
        <CustomImage
          src={restaurantData.Main_Branch_Info[0].Logo}
          alt="restaurant logo"
          ratio="16/9"
          containerClassName="w-[84px]"
        />

        {/* メニュー */}
        <ul className="flex flex-col items-center gap-[12px]">
          {navigationLinks.footer.map((link, index) => (
            <li
              key={index}
              className={cn(
                "text-[16px] text-foreground/80",
                pathname === link.href &&
                  "text-foreground font-bold border-b-2 border-accent"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Hours */}

        {/* SNSリンク */}
        <ul className="flex items-center justify-center gap-[32px]">
          {instagramLink && (
            <li className="w-[24px] h-[24px]">
              <CustomExternalLink href={instagramLink}>
                <FaInstagram className="w-full h-full" />
              </CustomExternalLink>
            </li>
          )}
          {facebookLink && (
            <li className="w-[24px] h-[24px]">
              <CustomExternalLink href={facebookLink}>
                <FaFacebook className="w-full h-full" />
              </CustomExternalLink>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
