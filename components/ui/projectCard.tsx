"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {motion} from "motion/react"; 
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
type Project = {
  name: string;
  image: StaticImageData;
  demoHref: string;
  githubHref: string;
  langs: string[];
  description: string;
};
export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const [isClamp, setIsClamp] = useState(false);
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:0.5,once:true}} transition={{ease:"easeOut",duration:0.5,}}>
      <Card
        className='relative transition-transform hover:-translate-y-2 ease-out duration-300 mx-auto w-full max-h-100 min-h-fit md:max-h-150 p-1.5 md:p-5 bg-card'>
        <div className="absolute inset-0 z-30 aspect-video " />
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={600}
          className="relative z-20 aspect-video w-full object-cover rounded-2xl"
        />
        <CardHeader className="w-full min-h-40">
          <CardTitle className="text-primary-text font-semibold md:font-bold text-sm sm:text-base md:text-lg xl:text-xl uppercase p-3 pl-0 line-clamp-2">
            {project.name}
          </CardTitle>

          <CardDescription
            onClick={() => setIsClamp(!isClamp)}
            className={`w-full text-[8px] sm:text-sm  ${!isClamp ? "line-clamp-3" : "line-clamp-none"}`}>
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1 mt-2 min-h-10">
            {project.langs.map((lang, index) => (
              <Badge
                variant={"ghost"}
                className="text-[8px] italic md:text-sm text-primary-text font-medium hover:text-white capitalize"
                key={index}>
                {lang}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardFooter className="pb-3">
       <div className="absolute flex bottom-3 left-1/2 -translate-x-1/2 ">
           <Button variant={"link"} className="w-1/2 text-[8px] md:text-xs">
             <Link target="_blank" href={project.demoHref}>
               Live Demo
             </Link>
           </Button>
           <Button variant={"link"} className="w-1/2 text-[8px] md:text-xs">
             <Link target="_blank" href={project.githubHref}>
               Github
             </Link>
           </Button>
       </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
