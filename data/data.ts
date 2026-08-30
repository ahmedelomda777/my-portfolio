import { HomeIcon, User, LayoutDashboard, Mail } from "lucide-react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript, } from "react-icons/io";
import { FaReact, FaBootstrap,FaCss3,FaSass,FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandTypescript,TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";


export const navData = [
  {
    name: "Home",
    href: "#home",
    icon: HomeIcon,
  },
  {
    name: "About me",
    href: "#about",
    icon: User,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: LayoutDashboard,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];
export const skills=[
  {
    icon:AiOutlineHtml5,
    label:"Html"
  },
  {
    icon:FaCss3,
    label:"Css"
  },
  {
    icon:IoLogoJavascript,
    label:"Javascript"
  }
  ,
  {
    icon:TbBrandTypescript,
    label:"Typescript"
  },
  {
    icon:FaBootstrap,
    label:"Bootstrap"
  },
  {
    icon:FaReact,
    label:"React.js"
  }, 
  {
    icon:TbBrandNextjs,
    label:"Next.js"
  }
  ,{
    icon:FaSass,
    label:"Sass"
  } ,{
    icon:RiTailwindCssFill,
    label:"Tailwind"
  }
  ,{
    icon:FaGithub,
    label:"Github"
  },
  {
    icon:FiFigma,
    label:"Figma"
  }


]