import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { FeatureGrid } from "@/app/components/FeatureGrid";
import { Testimonials } from "@/app/components/Testimonials";
import { ContactForm } from "@/app/components/ContactForm";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
