import { FC } from "react";
import CustomExternalLink from "@/components/common/atoms/CustomExternalLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/* ----------------------------------
   SNSリンク表示用コンポーネント
------------------------------------- */
interface Props {
  instagramLink: string | null;
  facebookLink: string | null;
}

export const SNSLinks: FC<Props> = ({ instagramLink, facebookLink }) => (
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
);
