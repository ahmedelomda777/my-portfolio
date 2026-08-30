import SplitFlapText from "../ui/SplitFlapText";
import Accent from "../ui/Accent";
import { skills } from "@/data/data";
import * as motion from "motion/react-client";
import { Badge } from "../ui/badge";
import Separative from "../ui/separative";
export default function About() {
  return (
    <div className="">
      <div className="w-full ">
        <motion.div
          initial={{ top: -50, opacity: 0 }}
          whileInView={{ top: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1, margin: "-50px" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className=" w-9/10 m-auto relative flex flex-col min-w-0 gap-3">
          <h3 className="text-3xl flex min-w-0 items-center gap-3">
            Hello I&apos;m
            <SplitFlapText
              className="capitalize "
              words={["frontend developer", "ahmed abbas ahmed"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              charset="alpha"
              flipsPerChar={8}
              tileColor="#27346885"
              textColor=""
              tileRadius={8}
              gap={6}
              loop
              fontSize={36}
              padTo={12}
            />
          </h3>
          <p className="w-1/2 text-xl ">
            I focus on building <Accent>modern</Accent>,
            <Accent>responsive</Accent> and high <Accent>performance</Accent>
            web applications using <Accent>React</Accent>,
            <Accent>Next.js</Accent>,<Accent>TypeScript </Accent>and
            <Accent>Tailwind CSS</Accent>.
          </p>
        </motion.div>
        <motion.div
          initial={{ top: -50, opacity: 0 }}
          whileInView={{ top: 0, opacity: 1 }}
          viewport={{ amount: 1, margin: "-50px", once: true }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="relative group/marquee w-2/3 m-auto mt-20 flex flex-col min-w-0 gap-8 overflow-hidden">
          <h3 className="section-title">
            my skills
          </h3>
          <div className="flex -ml-250 w-max animate-marquee group-hover/marquee:paused">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group/skills relative w-20 gap-10 shrink-0 flex justify-center">
                <skill.icon className="w-10 h-10 text-muted aspect-auto" />
                <Badge
                  variant={"secondary"}
                  className="hidden absolute -top-3/4  mt-2 whitespace-nowrap text-primary-text group-hover/skills:block">
                  {skill.label}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
            <Separative/>
    </div>
  );
}
