import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Stats } from "@/components/site/Stats";
import { Tracker } from "@/components/site/Tracker";
import { Ticker } from "@/components/site/Ticker";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CTABanner } from "@/components/site/CTABanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronRoute Heavy Loads. Flawless Delivery." },
      { name: "description", content: "Coast-to-coast freight, warehousing, and supply chain orchestration. 48 states, 99.2% on-time, one accountable fleet." },
      { property: "og:title", content: "IronRoute Heavy Loads. Flawless Delivery." },
      { property: "og:description", content: "Coast-to-coast freight, warehousing, and supply chain orchestration." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhyChoose />
      <About />
      <Services />
      <HowItWorks />
      <Stats />
      <Tracker />
      <Ticker />
      <Industries />
      <Testimonials />
      <Contact />
      <QuoteForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
