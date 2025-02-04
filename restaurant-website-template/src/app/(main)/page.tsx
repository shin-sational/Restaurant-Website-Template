import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import PageTitleImage from "@/components/common/PageTitleImage";
import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";
import ImageCarousel from "@/components/Home/ImageCarousel";
import { CustomButton } from "@/components/common/atoms/CustomButton";
import Link from "next/link";
import { NEXT_PUBLIC_BASE_URL } from "@/config/ENV";
import CustomError from "@/components/CustomError";
import { ERROR_MESSAGES } from "@/config/errorMessage";

const Home = async () => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/restaurant`, {
      next: { revalidate: 3600 }, // 1時間キャッシュ
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return (
        <CustomError message={ERROR_MESSAGES.en.BACKEND.GENERAL.UNEXPECTED} />
      );
    }
    const restaurantData = await response.json();

    return (
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
      </section>
    );
  } catch (error) {
    if (error instanceof Error) {
      return <CustomError message={error.message} />;
    }
    return (
      <CustomError message={ERROR_MESSAGES.en.BACKEND.GENERAL.UNEXPECTED} />
    );
  }
};

export default Home;
