import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Approach from "@/components/Approach/Approach";
import Experience from "@/components/Experience/Experience";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Approach />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
