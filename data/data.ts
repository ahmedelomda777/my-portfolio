import { HomeIcon, User, LayoutDashboard, Mail } from "lucide-react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript, } from "react-icons/io";
import { FaReact, FaBootstrap,FaCss3,FaSass,FaGithub ,FaFacebook, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandTypescript,TbBrandNextjs, } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import vuImg from "@/assets/images/vu-platform.png";
import autoImg from "@/assets/images/autopilot-website.png";
import findStateImg from "@/assets/images/findstate.png";
import nasaImg from "@/assets/images/nasa.png";
import kasperImg from "@/assets/images/kasper.png";
import weatherImg from "@/assets/images/weather.png";
import shoesImg from "@/assets/images/shoes.png";
import kudzokaImg from "@/assets/images/kdzoka.png";

import { CiLocationOn } from "react-icons/ci";


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
    name:"Weather",
    image:weatherImg,
    demoHref:"https://weather-seven-lac-96.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/weather",
    langs:["html","css","typescript","react","next.js"],
    description:"A weather dashboard built with Next.js (App Router) and TypeScript, fetching live data from the OpenWeatherMap API. Features server-side data fetching, a custom loading skeleton, and a secure image proxy via a Next.js API route to keep the API key and third-party requests off the client. Styled with Tailwind CSS.",
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
   {
    name:"nasa",
    image:nasaImg,
    demoHref:"https://nasa-woad-kappa.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/nasa",
    langs:["html","css","bootstrap"],
    description:"landing page was designed and developed using HTML, CSS, and Bootstrap, with full Arabic language support (RTL) , with a focus on a seamless user experience and fast loading speeds.",
  },{
    name:"kasper",
    image:kasperImg,
    demoHref:"https://kasper-cyan.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/kasper",
    langs:["html","css"],
    description:"Customize and develop a Landing Page (Template-based) using HTML/CSS, including Services, Portfolio and About sections, with a fully responsive design.",
  },{
    name:"shoes shop",
    image:shoesImg,
    demoHref:"https://evaluation2-seven.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/evaluation2",
    langs:["html","css"],
    description:"A fully integrated multi-page e-commerce project for selling clothing and shoes, built entirely from scratch using HTML and CSS. It features multiple, consistent pages: Home (Hero Section, Categories, Featured Products, Promotions), Store, Product Details, Shopping Cart, and Checkout, and Final",
  },{
    name:"kudzoka",
    image:kudzokaImg,
    demoHref:"https://evaluation1-mu.vercel.app/",
    githubHref:"https://github.com/ahmedelomda777/evaluation1",
    langs:["html","css"],
    description:"My first web",
  },

]
export const contact=[
  {
    title:"email",
    icon:Mail,
    content:"ahmedabs777@gmail.com",
  },
  {    
    title:"number",
    icon:FaWhatsapp,
    content:"01069160736",
  },
  {     
    title:"location",
    icon:CiLocationOn,
    content:"egypt/daqahlia",
  }
] 
 export const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Enter your message",
    },
  ]as const;
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