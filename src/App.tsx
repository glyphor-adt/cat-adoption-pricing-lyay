import React from "react";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const App: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <main className="relative overflow-hidden">
        <Hero
          title={siteConfig.hero.title}
          description={siteConfig.hero.description}
          image={siteConfig.hero.image}
        />
        <div className="container mx-auto py-12 md:py-24">
          <Features
            title={siteConfig.features.title}
            features={siteConfig.features.items}
          />
          <Pricing
            title={siteConfig.pricing.title}
            description={siteConfig.pricing.description}
            plans={siteConfig.pricing.plans}
          />
          <Testimonials
            title={siteConfig.testimonials.title}
            testimonials={siteConfig.testimonials.items}
          />
        </div>
        <Footer
          siteName={siteConfig.name}
          copyright={siteConfig.footer.copyright}
        />
      </main>
    </div>
  );
};

export default App;