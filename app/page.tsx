import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" scroll-smooth relative z-0 bg-primary space-y-10 min-h-screen overflow-hidden">
      <div
        className={`relative  bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen`}
      >
        <Navbar />
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto space-y-20 ">
        <div id="about">
          <About />
        </div>
        <Skills />
        <Project />

        {/* Project  */}
      </div>

      <div className=" relative z-0 max-w-7xl mx-auto md:px-5 px-2">
        <Contact />
      </div>

      {/* Contact  */}
      <div className="w-full bg-black py-10 text-white text-center">
        Created and Developed by Teja Pendem
      </div>
    </main>
  );
}
