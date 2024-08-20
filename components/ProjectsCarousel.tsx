"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TWork } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProjectsCarrousel = ({
  projects,
  className,
}: Readonly<{
  className?: string;
  projects: TWork[];
}>) => {
  return (
    <div className="relative px-[16%] lg:px-[10%] w-full h-full">
        <Carousel opts={{loop:true}}>
    <CarouselContent>
    {projects.map((con, ind) => (
        <CarouselItem key={ind} className="pl-4 md:basis-1/2 cursor-grab">
          <Link href={con.link} target="_blank" className="rounded-md relative block h-72 overflow-hidden bg-secondary text-secondary-foreground">
            <Image 
            src={con.icon}
            alt={`illustrative picture of the ${con.name} project`}
            fill
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 right-0 p-2 bg-gradient-to-t from-secondary to-transparent text-secondary-foreground flex flex-col justify-end">
              <h3 className="font-bold">{con.name}</h3>
              <p>{con.description}</p>
            </div>
        </Link>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
    </div>
  );
};

export default ProjectsCarrousel;
