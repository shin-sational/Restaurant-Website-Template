import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DataFetcher from "@/components/common/DataFetcher";
import { LogoSection } from "@/components/common/LogoSection";
import { SNSLinks } from "@/components/common/SnsLinks";
import NavigationList from "@/components/common/NavigationList";

const Header = () => {
  return (
    <DataFetcher>
      {(restaurantData) => {
        const logo = restaurantData.Main_Branch_Info[0].Logo || null;
        const instagramLink =
          restaurantData.Main_Branch_Info[0].Instagram || null;
        const facebookLink =
          restaurantData.Main_Branch_Info[0].Facebook || null;
        return (
          <header className="sticky top-0 w-full h-[64px] bg-background z-40">
            {/* モバイル版 */}
            <nav className="block md:hidden">
              <div className="container mx-auto h-full flex items-center justify-between py-4 px-6">
                {/* ロゴエリア */}
                <LogoSection logo={logo} containerClassName="w-[60px]" />

                {/* ナビゲーション */}
                <SidebarTrigger />
              </div>
            </nav>

            {/* デスクトップ版 */}
            <nav className="hidden md:block">
              <div className="container mx-auto h-full flex items-center justify-between py-4 px-6">
                {/* ロゴエリア */}
                <LogoSection logo={logo} containerClassName="w-[60px]" />

                {/* ナビゲーション */}
                <div className="flex items-center gap-[48px]">
                  <NavigationList
                    ulClassName="flex items-center gap-[48px]"
                    liClassName="text-foreground/80 text-[16px]"
                    activeClassName="text-foreground font-bold border-b-2 border-accent"
                  />
                  {/* SNSリンク */}
                  <SNSLinks
                    instagramLink={instagramLink}
                    facebookLink={facebookLink}
                  />
                </div>
              </div>
            </nav>
          </header>
        );
      }}
    </DataFetcher>
  );
};

export default Header;
