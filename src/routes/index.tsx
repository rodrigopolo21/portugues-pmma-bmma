import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Curriculum } from "@/components/landing/Curriculum";
import { Comparison } from "@/components/landing/Comparison";
import { Stats } from "@/components/landing/Stats";
import { ContentPreview } from "@/components/landing/ContentPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Professor } from "@/components/landing/Professor";
import { Offer } from "@/components/landing/Offer";
import { FloatingCTAs } from "@/components/landing/FloatingCTAs";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-dvh w-full bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Curriculum />
        <Comparison />
        <Stats />
        <ContentPreview />
        <Professor />
        <Testimonials />
        <Guarantee />
        <Offer />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
