import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTierProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  features,
  isPopular,
}) => {
  return (
    <Card
      className={cn(
        "w-full rounded-xl border-2 border-muted transition-transform hover:scale-105",
        isPopular && "border-primary shadow-lg"
      )}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
        <div className="text-sm text-muted-foreground">Adoption Fee</div>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-sm text-muted-foreground">/ adoption</span>
        </div>
        {isPopular && (
          <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            Popular
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="mt-4 w-full">Adopt Now</Button>
      </CardContent>
    </Card>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Adoption Fees</h2>
          <p className="text-muted-foreground">
            Transparent pricing to help you bring home your new best friend.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingTier
            title="Kitten"
            price={75}
            features={[
              "Initial Vaccinations",
              "Deworming",
              "Flea Treatment",
              "Microchipping (Optional, +$15)",
            ]}
          />
          <PricingTier
            title="Adult Cat"
            price={50}
            features={[
              "Spay/Neuter",
              "Vaccinations (Up-to-date)",
              "Microchipping",
              "FIV/FeLV Testing",
            ]}
            isPopular={true}
          />
          <PricingTier
            title="Senior Cat"
            price={25}
            features={[
              "Spay/Neuter (if applicable)",
              "Vaccinations (Up-to-date)",
              "Microchipping",
              "Health Check by Vet",
            ]}
          />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Adoption fees help cover the costs of providing essential care for
          animals in our shelter.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;