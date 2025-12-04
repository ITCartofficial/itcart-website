"use client";

import HeroBanner from "@/components/HeroBanner";
import IndustryGrid from "@/components/IndustryGrid";
import { useEffect, useState } from "react";

export default function Page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (

        <html lang="en">

            <head>
                <title>Digital Transformation Solutions for All Industries | iTCart </title>
                <meta name="description" content="Meta description: From banking to manufacturing, healthcare to telecom—iTCart delivers AI-native industry solutions that modernize operations, enhance efficiency, and fuel growth. " />
                <meta property="og:url" content={`https://itcart.ai/industry`} />
                <link rel="canonical" href="https://itcart.ai/industry"></link>
            </head>


            <div className='bg-black'>
                <HeroBanner title="Our Industry"
                    description="Our company showcases expertise across tech, healthcare, finance, and E-Commerce industries. Specializing in software development, cybersecurity, healthcare IT, fintech, and E-Commerce solutions, we deliver automation innovation and tailored services to optimize operations and bolster client growth in these sectors."
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our Industry', url: '/industry' }
                    ]}
                    backgroundImage="/images/vertical/vertical-bg.jpg"
                // backgroundImage="/images/industries/industry-bg.png"
                />
                <IndustryGrid className='container' />
            </div>

        </html>

    )
}