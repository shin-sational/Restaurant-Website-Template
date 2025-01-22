"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { navigationLinks } from "@/config/frontend/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import CustomExternalLink from "../common/atoms/CustomExternalLink";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/**
 * TODO
 * Classnameの調整
 * それぞれのアイテムの間隔を調整
 * 選択時のエフェクトの調整
 */

export function AppSidebar({
  instagramLink,
  facebookLink,
}: {
  instagramLink?: string;
  facebookLink?: string;
}) {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();
  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  return (
    <Sidebar>
      <SidebarHeader className="hidden" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>LOGO</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationLinks.header.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    className="w-fit mx-auto flex flex-col items-center justify-center"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-none",
                        pathname === link.href && "border-b border-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-center gap-4">
                {instagramLink && (
                  <SidebarMenuButton asChild className="w-fit">
                    <CustomExternalLink href={instagramLink}>
                      <FaInstagram />
                    </CustomExternalLink>
                  </SidebarMenuButton>
                )}
                {facebookLink && (
                  <SidebarMenuButton asChild className="w-fit">
                    <CustomExternalLink href={facebookLink}>
                      <FaFacebook />
                    </CustomExternalLink>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
