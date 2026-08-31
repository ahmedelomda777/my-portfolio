import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-w-0 items-center justify-center">
    <section id="home"><Hero/></section>
    <section id="about"><About/></section>
    <section id="projects"><Projects/></section> 
    <section id="contact"><Contact/></section>  

    </div>
  );
}
