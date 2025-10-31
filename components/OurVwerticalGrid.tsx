import React from 'react';
import VerticalCard from './cards/VerticalCard';
import { verticalData } from '@/lib/data/verticalData';

interface OurVwerticalGridProps {
    className?: string;
}

const OurVwerticalGrid: React.FC<OurVwerticalGridProps> = ({ className = "" }) => {

    return (
        <section className={`w-full   container mb-16  ${className}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-8 place-items-center">
                {verticalData.map((service, index) => {

                    return (
                        <VerticalCard
                            key={`${service.title}-${index}`}
                            title={service.title}
                            description={service.description}
                            linkUrl={service.linkUrl || "#"}
                            imageSrc={service.imageSrc}
                            imageAlt={`${service.title} illustration`}
                            compenyName={service.compenyName}
                            verticalCompenyLogo={service?.verticalCompenyLogo ?? "/images/default-logo.png"}
                            compenyLogo={service?.compenyLogo}
                        />
                    )
                }
                )}
            </div>
            {/* </div> */}
        </section>
    );
}

export default OurVwerticalGrid;