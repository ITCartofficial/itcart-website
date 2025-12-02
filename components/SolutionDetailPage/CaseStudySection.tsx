import Image from "next/image";
import React from 'react';
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  className?: string;
  title?: string;
  description?: string;
  caseStudyItems?: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

const CaseStudySection = ({
  className,
  title = "Case Studies",
  description = "Explore our success stories and see how we've helped businesses transform their operations.",
  caseStudyItems = [
    {
      id: 1,
      title: "E-Commerce Transformation",
      description: "How we helped a retail giant scale their online presence.",
      image: "/images/case-studies/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Cloud Migration Success",
      description: "Seamless transition to cloud infrastructure for better scalability.",
      image: "/images/case-studies/cloud.jpg"
    },
    {
      id: 3,
      title: "AI-native Analytics",
      description: "Implementing advanced analytics for data-driven decision making.",
      image: "/images/case-studies/analytics.jpg"
    }
  ]
}: CaseStudySectionProps) => {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* ITCart Logo Header */}
        <div className="flex justify-center mb-12">
          <div className="relative w-40 h-16 md:w-48 md:h-20">
            <Image
              src="/images/logo/logo-white.svg"
              alt="iTCart Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Section Title and Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-gray-900">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                {/* <Button variant="outline" className="w-full">
                  View Case Study
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          {/* <Button size="lg" className="px-8 py-6 text-lg">
            View All Case Studies
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
