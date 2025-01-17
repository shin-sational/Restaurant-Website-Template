import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CustomSectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-accent",
        "text-[24px]",
        "md:text-[40px]",
        "font-semibold",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default CustomSectionTitle;
