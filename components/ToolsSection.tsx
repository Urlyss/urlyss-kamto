import React from "react";
import SectionWrapper from "./SectionWrapper";
import { getTools } from "@/lib/db";

const ToolsSection = async ({ id }: { id: string }) => {
  const toolContent = await getTools()
  return (
    <SectionWrapper id={`${id}`} className="bg-accent text-accent-foreground">
      <div className="max-w-xl flex flex-col gap-4">
      <h1 className="lg:text-4xl text-xl font-semibold">Tools & Technologies</h1>
      <h2 className="lg:text-2xl font-semibold">I work with an extensive range of tools and platforms, including cutting-edge frontend frameworks, mobile development tools, and serverless technologies, to deliver innovative and effective solutions tailored to the client needs.</h2>
      {toolContent.map((con,ind)=>(
      <div className="space-y-2 border-2 p-4 rounded-md" key={ind}>
        <div className="font-semibold lg:text-xl">{con.title}</div>
        <p className="lg:text-lg text-sm">{con.description}</p>
      </div>
      ))}
      </div>
    </SectionWrapper>
  );
};

export default ToolsSection;
