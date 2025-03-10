"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TWork } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: { project: TWork }) => {
  return (
    <div className="rounded-md relative block h-72 overflow-hidden bg-secondary text-secondary-foreground">
      <Image 
        src={project.icon}
        alt={`illustrative picture of the ${project.name} project`}
        fill
        className="h-full w-full object-cover"
        sizes="100%,100%,100%"
      />
      <div className="absolute inset-0 right-0 p-4 bg-gradient-to-t from-secondary to-transparent text-secondary-foreground flex flex-col justify-end">
        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit">See More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{project.name}</DialogTitle>
              <DialogDescription asChild>
                <div className="relative w-full h-48 my-4">
                  <Image 
                    src={project.icon}
                    alt={`illustrative picture of the ${project.name} project`}
                    fill
                    className="object-cover rounded-md"
                    sizes="100%,100%,100%"
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="capitalize">{tech}</Badge>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button asChild>
                <Link href={project.link} target="_blank">Open Project</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

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
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 cursor-grab relative">
              <ProjectCard project={project} />
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
