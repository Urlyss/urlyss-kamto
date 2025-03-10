import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { getIntro } from "@/lib/db";

const PictureSection = async () => {
  const introContent = await getIntro()
  return (
    <SectionWrapper id="home" className="h-screen bg-secondary/70 lg:p-0">
      <div className="relative w-full h-full">
      <Image
        alt="picture of Urlyss KAMTO"
        src={
          introContent.picture
        }
        className="object-cover h-full sticky top-0 z-10 mix-blend-multiply "
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        fill
        priority
      />
      </div>
    </SectionWrapper>
  );
};

export default PictureSection;
