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
  dir,
}: {
  project: Project;
  dir: string;
}) {
  const [isClamp, setIsClamp] = useState(false);
  return (
    <motion.div initial={{opacity:0,x: dir==="left"?-50:dir==="right"?50:0,y:dir==="top"?50:0}} whileInView={{opacity:1,x:0,y:0}} viewport={{amount:0.5,once:true,margin:dir==="top"?"50px":""}} transition={{ease:"easeOut",duration:0.5,}}>
      <Card
        key={project.name}
        className='relative transition-transform hover:shadow-[0px_0px_15px_1px_var(--accent)] hover:scale-105  ease-out duration-300 mx-auto w-full p-5 bg-card'>
        <div className="absolute inset-0 z-30 aspect-video " />
        <Image
          src={project.image}
          alt={project.name}
          width={3000}
          height={3000}
          className="relative z-20 aspect-video w-full object-cover rounded-2xl"
        />
        <CardHeader className="w-full">
          <CardTitle className="text-primary-text font-bold text-xl uppercase p-3 pl-0 line-clamp-2">
            {project.name}
          </CardTitle>

          <CardDescription
            onClick={() => setIsClamp(!isClamp)}
            className={`w-full ${!isClamp ? "line-clamp-3" : "line-clamp-none"}`}>
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1 mt-2 min-h-10">
            {project.langs.map((lang, index) => (
              <Badge
                variant={"ghost"}
                className="text-sm text-primary-text font-medium hover:text-white capitalize"
                key={index}>
                {lang}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardFooter>
          <Button variant={"link"} className="w-1/2">
            <Link target="_blank" href={project.demoHref}>
              Live Demo
            </Link>
          </Button>
          <Button variant={"link"} className="w-1/2">
            <Link target="_blank" href={project.githubHref}>
              Github
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
