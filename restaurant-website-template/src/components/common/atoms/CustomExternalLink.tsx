import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

const CustomExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
    >
      {children}
    </Link>
  );
};

export default CustomExternalLink;
