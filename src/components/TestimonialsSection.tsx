import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  testimonial: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Alice Smith",
    title: "Software Engineer",
    image: "/images/alice.jpg", // Replace with actual image path
    testimonial:
      "Adopting Whiskers was the best decision ever! He's brought so much joy and laughter into my life.  The adoption process was smooth and the team was incredibly supportive.",
    rating: 5,
  },
  {
    name: "Bob Johnson",
    title: "Marketing Manager",
    image: "/images/bob.jpg", // Replace with actual image path
    testimonial:
      "Mittens is the sweetest cat I've ever met. She loves to cuddle and is always there to greet me when I come home. Highly recommend adopting from this organization!",
    rating: 4,
  },
  {
    name: "Charlie Brown",
    title: "Student",
    image: "/images/charlie.jpg", // Replace with actual image path
    testimonial:
      "I was a bit nervous about adopting a cat, but the team made me feel comfortable and confident. Socks is a great companion, and I'm so glad I gave him a home.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/50 dark:bg-secondary/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary dark:text-primary-foreground mb-8">
          Happy Tails: Stories from Our Adopters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-card dark:bg-card-foreground text-card-foreground shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium text-primary dark:text-primary-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-md text-muted-foreground italic mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                {/*  Optional: Add a "Read More" link or similar */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;