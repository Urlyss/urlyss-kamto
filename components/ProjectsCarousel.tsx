"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TWork } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProjectsCarrousel = ({
  projects,
  className,
}: Readonly<{
  className?: string;
  projects: TWork[];
}>) => {
  return (
    <Swiper
    breakpoints={{1280: {slidesPerView:projects.length * 2,spaceBetween:50}}}
    slidesPerView={projects.length}
    loop={true}
    spaceBetween={30}
    grabCursor={true}
    className="w-full h-full"
  >
    {[...projects,...projects,...projects].map((con, ind) => (
      <SwiperSlide className="lg:!h-3/5 lg:!w-80 !h-72 !w-64" key={ind}>
        <Link href={con.link} target="_blank" className="rounded-md relative block w-full h-full overflow-hidden bg-secondary text-secondary-foreground">
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
      </SwiperSlide>
      ))}
  </Swiper>
  );
};

export default ProjectsCarrousel;
