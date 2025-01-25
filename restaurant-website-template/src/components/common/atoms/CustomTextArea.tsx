import * as React from "react";

import { cn } from "@/lib/utils";

const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-[300px] md:w-[500px] rounded-none border-b border-foreground bg-background py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
CustomTextArea.displayName = "CustomTextArea";

export { CustomTextArea };
