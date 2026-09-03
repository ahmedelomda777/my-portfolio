import { links } from "@/data/data";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <motion.footer  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }} className="w-full mt-30 h-20  flex flex-col bg-background items-center justify-center gap-4">
        <ul className="flex gap-10">
        {links.map((link)=>{
        return(
            <li key={link.name}><Link href={link.href}><link.icon className="w-7 h-7 hover:text-accent duration-300 transition-transform hover:scale-110"/></Link></li>
        )
        })}
        </ul>
        <h5 className="capitalize text-base">©2026 <span className="text-muted">ahmed abbas</span> all rights reserved.</h5>
    </motion.footer>
  )
}
