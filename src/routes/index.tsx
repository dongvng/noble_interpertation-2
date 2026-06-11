import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Partners } from "@/components/site/Partners";
import { ProblemsSolutions } from "@/components/site/ProblemsSolutions";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { WhyNoble } from "@/components/site/WhyNoble";
import { Process } from "@/components/site/Process";
import { Team } from "@/components/site/Team";
import { Pricing } from "@/components/site/Pricing";
import { CTAContact } from "@/components/site/CTAContact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noble Interpretation — Premium Enterprise Interpretation in Vietnam" },
      { name: "description", content: "Noble Interpretation delivers premium simultaneous, consecutive, factory and executive interpretation services for global enterprises, conferences and FDI projects across Vietnam." },
      { property: "og:title", content: "Noble Interpretation — Precision In Every Conversation" },
      { property: "og:description", content: "Connecting languages, leading global success. Enterprise-grade interpretation for conferences, factories and executive meetings." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-navy text-ivory">
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <ProblemsSolutions />
          <Services />
          <Industries />
          <WhyNoble />
          <Process />
          <Team />
          <Pricing />
          <CTAContact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </I18nProvider>
  );
}
