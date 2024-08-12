import React from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectsCarrousel from "./ProjectsCarousel";
import { getWorks } from "@/lib/db";

const ProjectsSections = async ({ id }: { id: string }) => {
  const projectContent = await getWorks()
  return (
    <SectionWrapper id={`${id}`} className=" bg-background text-foreground !px-0 gap-20">
      <div className="max-w-xl flex flex-col gap-4 lg:px-20 px-4">
        <h1 className="lg:text-4xl font-semibold">Projects</h1>
        <h2 className="lg:text-2xl font-semibold">
          Swipe or drag below to see a small selection of projects I've worked
          on.
        </h2>
      </div>
      <ProjectsCarrousel projects={projectContent}/>
    </SectionWrapper>
  );
};

export default ProjectsSections;
