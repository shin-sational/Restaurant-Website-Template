import { navigationLinks } from "@/config/frontend/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

/* ----------------------------------
   フッターナビゲーション用コンポーネント
------------------------------------- */
interface Props {
  currentPath: string;
}

export const FooterNavigation: FC<Props> = ({ currentPath }) => (
  <ul className="flex flex-col items-center gap-[12px]">
    {navigationLinks.footer.map((link, index) => (
      <li
        key={index}
        className={cn(
          "text-[16px] text-foreground/80",
          currentPath === link.href &&
            "text-foreground font-bold border-b-2 border-accent"
        )}
      >
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
);
