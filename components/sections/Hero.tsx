import Image from "next/image";
import myPhoto from "@/assets/images/my-photo.webp";

import * as motion from "motion/react-client";
import Separative from "../ui/separative";
import SplitText from "../ui/splitText";
export default function Hero() {
   return (
    <div>
      <div className="w-9/10 m-auto flex items-center justify-around gap-50 mt-20">
        <SplitText/>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-1/3">
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
