'use client'
import { skills } from "@/data/data"
import {motion} from "motion/react"
import { Badge } from "./badge"
import { useState,useRef,useEffect } from "react"
export default function MarqueeSkills() {
  const containerTef = useRef<HTMLDivElement>(null) 
  const [activeIndex,setActiveIndex]=useState <null|number> (null)
  const [isHover,setIsHover] = useState(false)
  const isPause = activeIndex !== null || isHover
  useEffect(()=>{
    function handleClickOutside(e:MouseEvent){
        if(containerTef.current && !containerTef.current.contains(e.target as Node)){
            setActiveIndex(null)
        }
    }
      if(isPause){
            document.addEventListener("mousedown",handleClickOutside)
        }
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
  },
[isPause])
  return (
     <div
     ref={containerTef}
          className="group/marquee w-3/5 m-auto mt-20 flex flex-col min-w-0 gap-8 overflow-hidden">
          <h3 className="section-title">
            my skills
          </h3>
          <motion.div  initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ ease: "easeOut", duration: 0.5 }} >
          <div   
            className={`flex w-max animate-marquee`}
            style={{ animationPlayState: isPause ? "paused" : "running" }}
            onMouseEnter={(()=>setIsHover(true))}
            onMouseLeave={(()=>setIsHover(false))}>
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group/skills relative w-10 md:w-20 xl:gap-10 shrink-0 flex justify-center">
                <skill.icon onClick={()=>setActiveIndex(activeIndex===index ?null :index)} className="w-5 h-5 md:w-10 md:h-10 xl:w-12 xl:h-12 text-muted aspect-auto" />
                <Badge
                  variant={"secondary"}
                  className={`hidden absolute text-[7px] md:text-[10px] xl:text-xs -top-3/2 md:-top-3/4 items-center text-center justify-center mt-2 text-white group-hover/skills:block ${activeIndex === index?"block":""} `}>
                  {skill.label}
                </Badge>
              </div>
            ))}
          </div>
          </motion.div>
        </div>
  )
}
