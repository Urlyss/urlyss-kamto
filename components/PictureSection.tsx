import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { getIntro } from "@/lib/db";

const PictureSection = async () => {
  const introContent = await getIntro()
  return (
    <SectionWrapper className="h-screen bg-secondary/70">
      <Image
        alt="picture of Urlyss KAMTO"
        src={
          introContent.picture
        }
        className="object-cover h-full sticky top-0 z-10 mix-blend-multiply "
        fill
      />
    </SectionWrapper>
  );
};

export default PictureSection;
