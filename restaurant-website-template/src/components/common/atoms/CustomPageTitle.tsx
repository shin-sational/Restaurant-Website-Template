"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CustomPageTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-h1 font-bold",
        "text-[24px]",
        "md:text-[48px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default CustomPageTitle;
