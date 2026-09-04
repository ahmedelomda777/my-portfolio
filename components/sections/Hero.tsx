import Image from "next/image";
import myPhoto from "@/assets/images/my-photo.webp";

import * as motion from "motion/react-client";
import Separative from "../ui/separative";
import SplitText from "../ui/splitText";
export default function Hero() {
   return (
    <div className="w-full">
      <div className="w-4/5 m-auto flex items-center justify-between mt-20">
        <SplitText/>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-1/3">
          <Image
            src={myPhoto}
            className="rounded-2xl h-auto w-full object-cover min-w-30 max-w-80"
            alt="my photo"
            width={600}
            height={800}

          />
        </motion.div>
      </div>
    <Separative/>
    </div>
  );
}
