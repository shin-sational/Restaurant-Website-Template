import { MENU_CATEGORIES } from "@/config/frontend/siteConfig";
import Link from "next/link";
import React from "react";

const MenuSubHeader = () => {
  return (
    <nav className="fixed w-full h-[80px] z-10">
      <div className="overflow-x-auto scrollbar-hide h-full">
        <ul className="flex items-center justify-center gap-[16px] md:gap-[40px] min-w-max px-[16px] md:px-[10px] py-[24px]">
          {MENU_CATEGORIES.map((category) => (
            <li className="text-[16px] whitespace-nowrap" key={category.label}>
              <Link href={category.mainId}>{category.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuSubHeader;
