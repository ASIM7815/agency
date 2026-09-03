import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import Work from "@/components/sections/work";
import Statement from "@/components/sections/statement";
import About from "@/components/sections/about";
import Process from "@/components/sections/process";
import Stack from "@/components/sections/stack";
import Why from "@/components/sections/why";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* film grain over everything */}
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Products />
        <Work />
        <Statement />
        <About />
        <Process />
        <Stack />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
