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
    <h1 className={cn("text-h1 text-[48px] font-bold", className)}>
      {children}
    </h1>
  );
};

export default CustomPageTitle;
