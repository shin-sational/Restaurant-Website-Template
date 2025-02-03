import { FC } from "react";
import CustomImage from "@/components/common/atoms/CustomImage";

/* ----------------------------------
   ロゴ表示用コンポーネント
------------------------------------- */
interface Props {
  logo: string | null;
  containerClassName?: string;
}

export const LogoSection: FC<Props> = ({ logo, containerClassName }) => {
  if (!logo) return null;
  return (
    <CustomImage
      src={logo}
      alt="restaurant logo"
      ratio="16/9"
      containerClassName={containerClassName}
    />
  );
};
