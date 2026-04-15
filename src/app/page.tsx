import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ServicesGrid from "@/components/ServicesGrid";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ServicesGrid />
        <Gallery />
        <WhyUs />
        <ContactFooter />
      </main>
    </>
  );
}
