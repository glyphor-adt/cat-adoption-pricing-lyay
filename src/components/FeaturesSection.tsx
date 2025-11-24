import React from 'react';
import { Heart, Home, Smile, Gem } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Unwavering Companionship',
    description: 'Experience the joy of having a furry friend by your side, offering comfort and unconditional love.',
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Stress Reduction',
    description: 'Studies show that petting a cat can lower stress levels and promote relaxation.',
    icon: <Smile className="h-6 w-6 text-primary" />,
  },
  {
    title: 'A Loving Home',
    description: 'Give a deserving cat a second chance at happiness and a place to call their own.',
    icon: <Home className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Unconditional Love',
    description: 'Experience the pure joy and affection that cats provide, enriching your life in countless ways.',
    icon: <Gem className="h-6 w-6 text-primary" />,
  },
];


const FeaturesSection = () => {
  return (
    <section className="bg-secondary/10 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Benefits of Adopting a Cat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="mr-2">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;