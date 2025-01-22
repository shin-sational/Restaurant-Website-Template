"use client";
import { navigationLinks } from "@/config/frontend/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import CustomExternalLink from "../common/atoms/CustomExternalLink";
interface HeaderProps {
  instagramLink?: string;
  facebookLink?: string;
}

const Header: FC<HeaderProps> = ({ instagramLink, facebookLink }) => {
  const pathname = usePathname();

  return (
    // モバイル版のヘッダー
    <header className="w-full h-[64px] bg-background">
      <nav className="container mx-auto h-full flex items-center justify-between py-4 px-6">
        {/* ロゴエリア */}
        <div>LOGO</div>

        {/* ナビゲーション */}
        <ul className="flex items-center gap-10">
          {navigationLinks.header.map((link) => (
            <li
              key={link.href}
              className={cn(
                "text-foreground/80",
                pathname === link.href &&
                  "text-foreground border-b-2 border-accent"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          {/* SNSリンク */}
          {instagramLink && (
            <li>
              <CustomExternalLink href={instagramLink}>
                <FaInstagram />
              </CustomExternalLink>
            </li>
          )}
          {facebookLink && (
            <li>
              <CustomExternalLink href={facebookLink}>
                <FaFacebook />
              </CustomExternalLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
