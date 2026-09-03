'use client'
import { useEffect, useState } from "react";
import { navData } from "@/data/data";
import {motion} from "motion/react";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const sections = navData
      .filter((n) => n.href !== "/")
      .map((n) => document.querySelector(n.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return ( 
    <motion.nav  initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }} className="sticky z-50 top-1 w-9/10 m-auto mt-5 mb-5 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
      <ul className="flex items-center justify-around list-none">
        {navData.map((n) => {
          const isActive = activeSection === n.href;
          return (
            <li
              className={`hover:text-muted duration-200 ${isActive ? "border-b-2 border-primary pb-2 hover:text-primary-text" : ""}`}
              key={n.name}
            >
              <a className="flex items-center gap-2" href={n.href}>
                {n.name}
                <n.icon className="w-5 h-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}