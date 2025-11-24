import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-secondary/50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-primary-foreground mb-4">
              Give a Cat a Forever Home
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Discover the joy of cat adoption. Provide a loving home, and
              receive endless purrs, cuddles, and companionship. Open your
              heart and change a life today!
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80" asChild>
              <a href="/adopt">
                Adopt Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div>
            <Image
              src="/hero-cat.jpg"
              alt="Cute Cat"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Optional: Add background shapes or patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Example: Add a subtle radial gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-secondary-foreground/10 via-secondary/20 to-secondary/0 opacity-50"
          style={{
            filter: 'blur(50px)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;