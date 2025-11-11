"use client"
import HeroBanner from '@/components/HeroBanner'
import OurVwerticalGrid from '@/components/OurVwerticalGrid'
import React, { useEffect, useState } from 'react'

const OurVerticals = () => {

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
                <title>Next-Gen AI Platforms Built for Your Industry’s Future | iTCart</title>
                <meta name="description" content="Explore AI-driven platforms for BFSI, healthcare, manufacturing, real estate, and more. iTCart’s vertical solutions are built to optimize operations and drive enterprise growth." />
                <meta property="og:url" content={`https://itcart.ai/our-verticals`} />
            </head>



            <div className='bg-black'>
                <HeroBanner title="Our Verticals"
                    description="Our company showcases expertise across tech, healthcare, finance, and e-commerce industries. Specializing in software development, cybersecurity, healthcare IT, fintech, and e-commerce solutions, we deliver Automation innovation and tailored services to optimize operations and bolster client growth in these sectors."
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our Verticals', url: '/our-verticals' }
                    ]}
                    backgroundImage="/images/vertical/vertical-bg.jpg"
                />

                <div className='bg-black'>
                    <OurVwerticalGrid className='container' />
                </div>
            </div>
        </html>


    )
}

export default OurVerticals