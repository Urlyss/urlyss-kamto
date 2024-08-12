import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { IntroComponentAnimation, IntroTextAnimation } from "./IntroAnimation";
import { getIntro, getSocials } from "@/lib/db";

const IntroSection = async ({
  sections,
}: {
  sections: {
    id: string;
    label: string;
  }[];
}) => {
  const introContent = await getIntro()
  const socialContent = await getSocials()
  return (
    <IntroComponentAnimation className="lg:p-16 p-7 flex flex-col justify-between items-start gap-5 h-full">
      <IntroTextAnimation className="relative">
        <Menu
          sections={sections}
        />
      </IntroTextAnimation>
      <div className="space-y-10 max-w-[380px]">
        <IntroTextAnimation className="lg:leading-[57px] lg:text-5xl text-3xl">
        {introContent.header}
        </IntroTextAnimation>
        <IntroTextAnimation className="lg:text-xl text-md">
        {introContent.about_me}
        </IntroTextAnimation>
      </div>
      <IntroTextAnimation className="text-sm">
        <div>Find me on  <Link className="font-bold underline" target="_blank" href={socialContent.x}>Twitter</Link>, <Link target="_blank" className="font-bold underline" href={socialContent.github}>Github</Link> and <Link target="_blank" className="font-bold underline" href={socialContent.linkedin}>LinkedIn</Link></div>
        <div>Download my <Link className="font-bold underline" target="_blank" href={socialContent.resume}>resume</Link></div>
      </IntroTextAnimation>
    </IntroComponentAnimation>
  );
};

export default IntroSection;
