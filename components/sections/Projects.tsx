import { projects } from "@/data/data";
import ProjectCard from "../ui/projectCard";
import Separative from "../ui/separative";
export default function Projects() {
  return (
    <div className="w-4/5 m-auto">
      <div className="w-full">
        <h3 className="section-title">Projects</h3>
        <div className="grid grid-cols-3 gap-5 w-full ">
          {projects.map((project,index) => {
            return (
              <ProjectCard dir={`${index%3===0 ?"left":  index%3===1?"top":"right"}`} key={index} project={project}/>
            );
          })}
        </div>
      </div>
      <Separative/>
    </div>
  );
}
