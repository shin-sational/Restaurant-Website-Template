// components/DataFetcher.tsx
import React from "react";
import { NEXT_PUBLIC_BASE_URL } from "@/config/ENV";
import { ERROR_MESSAGES } from "@/config/errorMessage";
import CustomError from "@/components/CustomError";
import { RestaurantData } from "@/type/notionFrontend.Type";

interface DataFetcherProps {
  // children は取得したデータを引数にして描画するレンダープロップとして定義
  children: (data: RestaurantData) => React.ReactNode;
}

export default async function DataFetcher({ children }: DataFetcherProps) {
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

    const restaurantData: RestaurantData = await response.json();

    // 正常に取得できた場合、children 関数にデータを渡して描画
    return <>{children(restaurantData)}</>;
  } catch (error) {
    if (error instanceof Error) {
      return <CustomError message={error.message} />;
    }
    return (
      <CustomError message={ERROR_MESSAGES.en.BACKEND.GENERAL.UNEXPECTED} />
    );
  }
}
