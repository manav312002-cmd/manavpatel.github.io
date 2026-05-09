import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Services />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
