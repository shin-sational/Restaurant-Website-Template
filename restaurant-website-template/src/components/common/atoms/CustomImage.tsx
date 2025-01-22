import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

type CustomImageProps = {
  ratio: "16/9" | "5/4" | "1/1"; // アスペクト比を文字列で指定
  src: string; // 画像のURL
  alt: string; // 画像の代替テキスト
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
  ratio,
  src,
  alt,
  className,
  containerClassName,
}) => {
  return (
    <div className={cn("w-full relative", containerClassName)}>
      <AspectRatio ratio={ratioToNumber(ratio)}>
        <Image
          src={src}
          alt={alt}
          unoptimized={true}
          fill
          className={cn("rounded-md object-cover", className)}
        />
      </AspectRatio>
    </div>
  );
};

export default CustomImage;
