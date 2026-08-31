import { links } from "@/data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-20 bg-transparent">
        <ul className="flex">
        {links.map((link)=>{
        return(
            <li key={link.name}><Link href={link.href}><link.icon className="w-7 h-7 hover:text-accent duration-300 transition-transform hover:scale-110"/></Link></li>
        )
        })}
        </ul>
    </footer>
  )
}
