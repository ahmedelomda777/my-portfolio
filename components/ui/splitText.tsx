"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { SiGoogledrive } from "react-icons/si";
import { useState } from "react";
export default function SplitText() {
  const ahmedClassName =
    "text-shadow-[0px_0px_5px_var(--accent)] absolute inset-0 flex justify-center items-center text-xl md:text-4xl xl:text-5xl font-black tracking-wider transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]";
  const [isSplit, setIsSplit] = useState(false);
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={` w-3/5 flex flex-col gap-6 `}>
      <button
        onClick={() => setIsSplit(!isSplit)}
        className={`group relative top-0 m-auto w-full h-15 cursor-pointer `}>
        <h1>
          <span
            className={`${ahmedClassName} [clip-path:inset(0_0_50%_0)] ${isSplit ? "-translate-y-5.5" : ""} group-hover:-translate-y-5.5 `}>
            Ahmed Abbas
          </span>
          <span
            className={`${ahmedClassName} [clip-path:inset(50%_0_0_0)] ${isSplit ? "translate-y-5.5" : ""} group-hover:translate-y-5.5`}>
            Ahmed Abbas
          </span>
        </h1>
        <span
          className={`${ahmedClassName} text-xs md:text-base xl:text-xl font-bold text-muted opacity-0 scale-75 transition-all ease-in duration-500 ${isSplit ? "opacity-100 scale-100 " : ""} group-hover:opacity-100 group-hover:scale-100 `}>
          Frontend developer
        </span>
      </button>
      <Button asChild className="bg-primary m-auto">
        <a
          href="https://drive.google.com/file/d/1Nc4hGrwg0tQO5wgpQHMlsKAmF8n7Br7D/view?usp=drive_link"
          target="_blank"
          className="text-xs md:text-sm">
          
          <SiGoogledrive />
          View CV
        </a>
      </Button>
    </motion.div>
  );
}
