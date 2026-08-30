import Image from "next/image";
import myPhoto from "@/assets/images/my-photo.webp";
import { Button } from "../ui/button";
import { SiGoogledrive } from "react-icons/si";
import * as motion from "motion/react-client";
import Separative from "../ui/separative";
export default function Hero() {
  const ahmedClassName =
    "absolute inset-0 flex justify-center items-center text-6xl font-black tracking-wider transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]";
  return (
    <div>
      <div className="w-9/10 m-auto flex items-center justify-around gap-50 mt-20">
        <motion.div
          initial={{ right: 100, opacity: 0 }}
          whileInView={{ right: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-fit flex flex-col gap-6 ">
          <div className="group relative top-0 w-130 m-auto h-15 cursor-pointer ">
            <h1>
              <span
                className={`${ahmedClassName} [clip-path:inset(0_0_50%_0)] group-hover:-translate-y-5.5 `}>
                Ahmed Abbas
              </span>
              <span
                className={`${ahmedClassName} [clip-path:inset(50%_0_0_0)] group-hover:translate-y-5.5`}>
                Ahmed Abbas
              </span>
            </h1>
            <span
              className={`${ahmedClassName} text-xl font-bold text-muted opacity-0 scale-75 transition-all ease-in duration-500 group-hover:opacity-100 group-hover:scale-100 `}>
              Frontend developer
            </span>
          </div>
          <Button asChild className="bg-primary w-30 m-auto">
            <a
              href="https://drive.google.com/file/d/1hdokvc-C6Sip_jzTyRovEKdBJ_lSawNp/view?usp=drive_link"
              target="_blank">
              <SiGoogledrive />
              View CV
            </a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ left: 100, opacity: 0 }}
          whileInView={{ left: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-1/3 relative">
          <Image
            src={myPhoto}
            className="w-100 rounded-2xl aspect-auto"
            alt="my photo"
          />
        </motion.div>
      </div>
    <Separative/>
    </div>
  );
}
