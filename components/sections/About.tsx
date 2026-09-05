import SplitFlapText from "../ui/SplitFlapText";
import Accent from "../ui/Accent";
import * as motion from "motion/react-client";
import Separative from "../ui/separative";
import MarqueeSkills from "../ui/marqueeSkills";
export default function About() {
 
  return (
    <div>
     <h3 className="section-title mb-10">about me</h3>
      <div className="w-full ">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: "all"}}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className=" w-4/5 md:w-2/3 m-auto flex flex-col min-w-0 gap-3">
          <h3 className="text-sm md:text-lg xl:text-3xl flex min-w-0 items-center gap-3">
            Hello I&apos;m
      <SplitFlapText
              className="capitalize"
              words={["frontend developer", "ahmed abbas ahmed"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={1800}
              charset="alpha"
              flipsPerChar={4}
              fontSize = "clamp(16px,3.5vw,36px)"
              tileColor="#27346885"
              loop
            />
          </h3>
          <p className="w-2/3 text-xs leading-4.5 md:leading-6 xl:leading-8 md:text-base xl:text-xl ">
            I focus on building <Accent>modern</Accent>,
            <Accent>responsive</Accent> and high <Accent>performance </Accent>
            web applications using <Accent>React</Accent>,
            <Accent>Next.js</Accent>,<Accent>TypeScript </Accent>and
            <Accent> Tailwind CSS</Accent>.
          </p>
        </motion.div>
      <MarqueeSkills/>
      </div>
            <Separative/>
    </div>
  );
}
