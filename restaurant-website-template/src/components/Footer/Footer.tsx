import React, { memo } from "react";
import { LogoSection } from "../common/LogoSection";
import { SNSLinks } from "@/components/common/SnsLinks";
import DataFetcher from "@/components/common/DataFetcher";
import NavigationList from "@/components/common/NavigationList";

/**
 * TODO
 * - Hoursを追加する
 * - Headerとクラスを統一できる場合は、utilityクラスを作って適用する
 */

const Footer = () => {
  return (
    <DataFetcher>
      {(restaurantData) => {
        const logo = restaurantData.Main_Branch_Info[0].Logo || null;
        const instagramLink =
          restaurantData.Main_Branch_Info[0].Instagram || null;
        const facebookLink =
          restaurantData.Main_Branch_Info[0].Facebook || null;
        return (
          <footer className="w-full bg-secondaryBackground px-[20px] md:px-[70px] py-[40px] md:py-[60px]">
            {/* モバイル版 */}
            <div className="md:hidden w-full flex flex-col items-center gap-[38px]">
              {/* ロゴ */}
              <LogoSection logo={logo} containerClassName="max-w-[100px]" />
              {/* ナビゲーション */}
              <NavigationList
                ulClassName="flex flex-col items-center gap-[12px]"
                liClassName="text-[16px] text-foreground/80"
                activeClassName="text-foreground font-bold border-b-2 border-accent"
              />
              {/* SNSリンク */}
              <SNSLinks
                instagramLink={instagramLink}
                facebookLink={facebookLink}
              />
            </div>

            {/* デスクトップ版 */}
            <div className="hidden md:flex items-start justify-between">
              <div className="flex flex-col justify-start gap-[40px]">
                {/* ロゴ */}
                <LogoSection logo={logo} containerClassName="max-w-[100px]" />
                {/* SNSリンク */}
                <SNSLinks
                  instagramLink={instagramLink}
                  facebookLink={facebookLink}
                />
              </div>
              {/* ナビゲーション */}
              <NavigationList
                ulClassName="flex flex-col items-center gap-[12px]"
                liClassName="text-[16px] text-foreground/80"
                activeClassName="text-foreground font-bold border-b-2 border-accent"
              />
              {/* 営業時間 */}
              <div>Hoursをここに入れてください</div>
            </div>
          </footer>
        );
      }}
    </DataFetcher>
  );
};

export default memo(Footer);
