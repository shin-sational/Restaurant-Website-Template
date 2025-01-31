import { MENU_CATEGORIES } from "@/config/frontend/siteConfig";
import { GroupedMenuItems } from "@/type/menu.Type";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  groupedMenuItems: GroupedMenuItems;
}
const MenuSubHeader: FC<Props> = ({ groupedMenuItems }) => {
  return (
    <nav className="sticky top-0 bg-background/50 bg-opacity-10 w-full h-[80px] z-10">
      <div className="overflow-x-auto scrollbar-hide h-full">
        <ul className="flex items-center justify-center gap-[16px] md:gap-[40px] min-w-max px-[16px] md:px-[10px] py-[24px] font-bold">
          {Object.entries(groupedMenuItems).map(([category]) => (
            <li className="text-[16px] whitespace-nowrap" key={category}>
              <Link href={`#${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuSubHeader;
