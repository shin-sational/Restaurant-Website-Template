import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import PageTitleImage from "@/components/common/PageTitleImage";
import React from "react";
import ImageCarousel from "@/components/Home/ImageCarousel";
import { CustomButton } from "@/components/common/atoms/CustomButton";
import Link from "next/link";
import ContactDetails from "@/components/common/ContactDetails";

const Home = async () => {
  const restaurantData = await fetchPropertyData();

  return (
    <DataFetcher>
      {(restaurantData) => (
        <section>
          {/* ページタイトル */}
          <PageTitleImage
            backgroundImageSrc={
              restaurantData.Main_Branch_Info[0].Home_Menu_Photo1
            }
            type="home"
            restaurantName={restaurantData.Main_Branch_Info[0].Name}
          />

          {/* Our Menu */}
          <div className="flex flex-col items-center justify-center px-[16px] md:px-[70px] py-[40px] md:py-[80px] gap-[24px] md:gap-[70px]">
            {/* タイトルと説明 */}
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <CustomSectionTitle>Our Menu</CustomSectionTitle>
              <p className="text-[16px] md:text-[18px]">
                {restaurantData.Main_Branch_Info[0].Home_Menu_Description}
              </p>
            </div>
            {/* メニュー画像 (クライアントサイドなため、コンポーネント化)*/}
            <ImageCarousel restaurantData={restaurantData} />
        {/* メニュー遷移ボタン */}
        <CustomButton variant="default">
          <Link href="/menu">View the Menu</Link>
        </CustomButton>
      </div>
      {/* location */}
      <ContactDetails restaurantData={restaurantData} />
        </section>
      )}
    </DataFetcher>
  );
};

export default Home;
