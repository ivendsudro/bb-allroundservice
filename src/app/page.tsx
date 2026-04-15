import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <ServicesGrid />
      <WhyUs />
      <ContactFooter />
    </main>
  );
}
