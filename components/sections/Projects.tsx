import { projects } from "@/data/data";
import ProjectCard from "../ui/projectCard";
import Separative from "../ui/separative";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  return (
    <div className="w-4/5 m-auto">
      <div className="w-full">
        <h3 className="section-title">Projects</h3>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:max-w-xs md:max-w-5xl m-auto"
    >
      <CarouselContent className="min-h-130 items-center">
        {projects.map((project,index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 ">
             <ProjectCard project={project}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:text-primary-text/50"/>
      <CarouselNext className="hover:text-primary-text/50"/>
    </Carousel>
      </div>
      <Separative/>
    </div>
  );
}
