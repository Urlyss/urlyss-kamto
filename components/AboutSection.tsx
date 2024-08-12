import React from "react";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import { getAbout, getExperiences, getIntro } from "@/lib/db";

const AboutSection = async ({ id }: { id: string }) => {
  const aboutContent = await getAbout()
  const introContent = await getIntro()
  const workContent = await getExperiences()
  return (
    <SectionWrapper id={`${id}`} className="bg-secondary text-secondary-foreground">
      <div className="max-w-xl flex flex-col gap-3">
        <h1 className="xl:text-4xl text-xl font-semibold">About me</h1>
        <h2 className="xl:text-2xl font-semibold">
          {introContent.description}
        </h2>
        {aboutContent.map((con, ind) => (
          <div className="space-y-1" key={ind}>
            <div className="font-semibold xl:text-xl">{con.title}</div>
            <p className="xl:text-lg text-sm">{con.description}</p>
          </div>
        ))}
      </div>
        <div className="text-sm xl:text-base">
          Currently working at{" "}
          <Link className="underline" href={workContent.at(-1)?.link || ""}>
            {workContent.at(-1)?.company}
          </Link>
        </div>
    </SectionWrapper>
  );
};

export default AboutSection;
