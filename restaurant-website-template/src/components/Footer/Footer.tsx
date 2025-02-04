import React, { memo } from "react";
import { LogoSection } from "./LogoSection";
import { FooterNavigation } from "./FooterNavigation";
import { SNSLinks } from "./SnsLinks";
import DataFetcher from "../common/DataFetcher";

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
              <FooterNavigation />
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
              <FooterNavigation />
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
