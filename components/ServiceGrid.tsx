import React from 'react';
import { serviceData } from '@/lib/data/serviceData';
import ServiceCard from '@/components/cards/ServiceCard';

interface ServicesGridProps {
  className?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ className = "" }) => {

  return (
    <section className={`w-full flex pb-16 bg-black container ${className}`}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              title={service.title}
              description={service.description}
              linkUrl={service.linkUrl || "#"}
              imageSrc={service.imageSrc}
              imageAlt={`${service.title} illustration`}
            />
          ))}
        </div>
      {/* </div> */}
    </section>
  );
}

export default ServicesGrid;