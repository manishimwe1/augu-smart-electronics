import { CheckCircle, Link } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const features = [
    "Experienced & certified technicians",
    "Fast turnaround time",
    "Affordable pricing",
    "Quality guaranteed",
    "On-site & remote support",
    "Emergency services available",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/inshop.jpeg"
              alt="AUGU workshop"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AUGU?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AUGU Smart Electronic Service Ltd is Kigali's premier technology
              repair and installation company. With years of experience and a
              team of certified technicians, we provide reliable, fast, and
              professional tech solutions for businesses and individuals across
              Rwanda.
            </p>
            <div className="grid gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
