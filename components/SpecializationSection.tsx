import React from "react";
import SectionWrapper from "./SectionWrapper";
import { getSpecialization } from "@/lib/db";

const SpecializationSection = async ({ id }: { id: string }) => {
  const specializationContent = await getSpecialization()
  return (
    <SectionWrapper id={`${id}`} className="bg-popover text-popover-foreground">
      <div className="max-w-xl flex flex-col gap-4">
      <h1 className="lg:text-4xl text-xl font-semibold">Areas of Specialization</h1>
      <h2 className="lg:text-2xl font-semibold">A combination of unconventional yet complementary skills designed to provide a strategic edge.</h2>
      {specializationContent.map((con,ind)=>(
      <div className="space-y-2" key={ind}>
        <div className="font-semibold lg:text-xl">{con.title}</div>
        <p className="lg:text-lg text-sm">{con.description}</p>
      </div>
      ))}
      </div>
    </SectionWrapper>
  );
};

export default SpecializationSection;
