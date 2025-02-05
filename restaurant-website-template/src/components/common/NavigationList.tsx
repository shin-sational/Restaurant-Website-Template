// components/common/NavigationList.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/config/frontend/siteConfig";

interface NavigationListProps {
  /** ul 要素に適用するクラス名 */
  ulClassName?: string;
  /** li 要素に適用する基本のクラス名 */
  liClassName?: string;
  /** アクティブ時に li 要素に追加するクラス名 */
  activeClassName?: string;
}

const NavigationList: FC<NavigationListProps> = ({
  ulClassName,
  liClassName,
  activeClassName,
}) => {
  const pathname = usePathname();

  return (
    <ul className={ulClassName}>
      {navigationLinks.map((link) => (
        <li
          key={link.href}
          className={cn(liClassName, pathname === link.href && activeClassName)}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
