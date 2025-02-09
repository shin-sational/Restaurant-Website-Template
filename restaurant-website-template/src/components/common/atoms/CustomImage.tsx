"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";

type CustomImageProps = ImageProps & {
  ratio: "16/9" | "5/4" | "1/1"; // アスペクト比を文字列で指定
  containerClassName?: string; // コンテナの幅など個別指定（例: w-full など）
  className?: string; // 任意の追加クラス
};

const ratioToNumber = (ratio: "16/9" | "5/4" | "1/1"): number => {
  switch (ratio) {
    case "16/9":
      return 16 / 9;
    case "5/4":
      return 5 / 4;
    case "1/1":
      return 1;
  }
};

const CustomImage: FC<CustomImageProps> = ({
  src,
  alt,
  ratio,
  className,
  containerClassName,
}) => {
  const [retryKey, setRetryKey] = useState<number>(0);
  const retryCount = useRef(0);

  useEffect(() => {
    retryCount.current = 0;
  }, [src]);

  // 画像読み込み失敗時のリトライ処理
  const handleError = () => {
    if (retryCount.current < 5) {
      setTimeout(() => {
        retryCount.current++;
        setRetryKey((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className={cn("w-full relative", containerClassName)}>
      <AspectRatio ratio={ratioToNumber(ratio)}>
        <Image
          key={retryKey}
          src={src}
          alt={alt}
          unoptimized={true}
          fill
          className={cn("rounded-md object-cover", className)}
          onError={handleError}
        />
      </AspectRatio>
    </div>
  );
};

export default CustomImage;
