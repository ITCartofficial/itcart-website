import React from 'react';
import ServiceCard from '@/components/cards/ServiceCard';
import { solutionData } from '@/lib/data/solutionData';


interface SolutionGrid {
    className?: string;
}

const SolutionGrid: React.FC<SolutionGrid> = ({ className = "" }) => {

    return (
        <section className={`w-full flex pb-16 bg-black container ${className}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {solutionData.map((service, index) => (
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

export default SolutionGrid;