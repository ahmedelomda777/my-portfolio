import { HomeIcon, User, LayoutDashboard, Mail } from "lucide-react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript, } from "react-icons/io";
import { FaReact, FaBootstrap,FaCss3,FaSass,FaGithub ,FaFacebook, FaLinkedin} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandTypescript,TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import vuImg from "@/assets/images/vu-platform.png";
import autoImg from "@/assets/images/autopilot-website.png";
import findStateImg from "@/assets/images/findstate.png";


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
export const projects=[
  {
    name:"VU platform",
    image:vuImg,
    demoHref:"https://vu-platform.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/Virtual-Interview-Platform",
    langs:["html","css","typescript","react","next.js"],
    description:"An AI-powered virtual interview platform built with Next.js, TypeScript, and Tailwind CSS. Enables companies to post jobs and conduct AI-driven technical interviews with real-time eye & body tracking, while candidates apply, get interviewed, and receive instant AI-generated evaluation reports. Built collaboratively with a full team of frontend, UI/UX, and backend engineers.",
  }, 
  {
    name:"autopilot websites",
    image:autoImg,
    demoHref:"https://react-project-amber-eight.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/React-project",
    langs:["html","css","javascript","react"],
    description:"A multi-page business landing site built with React, JavaScript, HTML & CSS. Features client-side routing across dedicated pages, a controlled contact form connected to React state, and EmailJS integration for sending messages directly without a backend, fully optimized for all screen sizes.",
  },
  {
    name:"company portfolio",
    image:findStateImg,
    demoHref:"https://company-portfolio-duz6.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/companyPortfolio",
    langs:["html","css"],
    description:"A responsive real estate landing page built with pure HTML & CSS, featuring a dark/light mode toggle and a working contact form powered by EmailJS. Fully optimized for all screen sizes.",
  },

]
export const links=[
  {
    name:"github",
    icon:FaGithub,
    href:"https://github.com/ahmedelomda777"
  }, 
  {
    name:"linkedin",
    icon:FaLinkedin,
    href:"https://www.linkedin.com/in/ahmed-el-omda-6b1097253"
  },
  {
    name:"facebook",
    icon:FaFacebook,
    href:"https://web.facebook.com/ahmed.el.omda.529140"
  }
  
]