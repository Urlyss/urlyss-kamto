import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {  


  return (
    <section className={cn("sticky top-0 min-h-screen w-full pt-20 pb-10 z-40 overflow-hidden lg:px-20 px-4 flex flex-col justify-between", className)} {...props}>
      {children}
    </section>
  );
};

SectionWrapper.displayName = "SectionWrapper"
export default SectionWrapper;
