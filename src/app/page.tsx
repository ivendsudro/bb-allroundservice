import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Marquee from "@/components/Marquee";
import ServicesGrid from "@/components/ServicesGrid";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import ContactFooter from "@/components/ContactFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Marquee />
        <ServicesGrid />
        <Gallery />
        <WhyUs />
        <Reviews />
        <ContactFooter />
      </main>
    </>
  );
}
