import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const SectionWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <section className={cn("sticky top-0 min-h-full lg:py-10 w-full pt-20 pb-10 z-40 overflow-hidden h-screen lg:px-20 px-4 flex flex-col justify-between", className)} {...props}>
    {children}
  </section>
));

SectionWrapper.displayName = "SectionWrapper"
export default SectionWrapper;
